'use strict';

/* Global variables declaration */
var ulEl = document.getElementById('container');
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');
// var ulEl2 = document.getElementById('listContainer');
var totalClicks = 26;
ImageCreator.allImages = [];
var randoNum = 0;
var comparisonValues = [null, null, null];
var clicksArray = [];
var titleArray = [];

/* Constructor function */
function ImageCreator(title, filepath) {
  this.title = title;
  this.filepath = filepath;
  this.clicks = 0;
  this.views = 0;
  ImageCreator.allImages.push(this);
}

/* Methods */
//This is the random number generator from 0 to 19 to choose the index of the image to display
function randomGen() {
  return Math.floor(Math.random() * ImageCreator.allImages.length);
}

function assign(imgEl) {
  do {
    randoNum = randomGen();
    var isUnique = true;
    for (var i = 0; i < comparisonValues.length; i++) {
      if(comparisonValues[i] === randoNum) {
        isUnique = false;
      }
    }
  }while (!isUnique);
  imgEl.src = ImageCreator.allImages[randoNum].filepath;
  imgEl.title = ImageCreator.allImages[randoNum].title;
  imgEl.alt = ImageCreator.allImages[randoNum].title;
  ImageCreator.allImages[randoNum].views++;
  comparisonValues.push(randoNum);
  return randoNum;
}

//render first iteration just display one image from the array targeting img tags
function render() {
  assign(leftImg);
  assign(centerImg);
  assign(rightImg);
  totalClicks--;
  console.log(totalClicks);
  comparisonValues.splice(0,3);
  if (totalClicks < 1) {
    ulEl.removeEventListener('click', handleClicks);
    //listCreator();
    localStorage.setItem('objectArray', JSON.stringify(ImageCreator.allImages));
    fillArray();
    displayChart();
  }
}

//Sam method for handling clicks for the pictures.
function handleClicks(event) {
  for (var i = 0; i < ImageCreator.allImages.length; i++) {
    if (event.target.alt === ImageCreator.allImages[i].title) {
      ImageCreator.allImages[i].clicks += 1;
    }
  }
  render();
}
/* Depreciated functionality may be used in future iterations.
//Target the listContainer id to create new li elements that then propagate the data to display.
function listCreator() {
  for(var i = 0; i < ImageCreator.allImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = ImageCreator.allImages[i].clicks + ' votes for the ' + ImageCreator.allImages[i].title;
    ulEl2.appendChild(liEl);
  }
}
*/

//Top and Bottom performers(aka clicks = 0) function

//Targeting the canvas to display the graph and potentially in the future the top and bottom performers.
var ctx = document.getElementById('list-chart').getContext('2d');

var colorsArray = Array(20).fill('#ad974f');
Chart.defaults.global.defaultFontColor = '#eaeaea';

var data = {
  labels: titleArray,
  datasets: [
    {
      data: clicksArray,
      backgroundColor: colorsArray,
      hoverBackgroundColor: colorsArray,
    }
  ]
};

function displayChart() {
  listChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      legend: {
        display: false,
        labels: {
        }
      },
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      title: {
        display: true,
        text: 'Votes Per Product',
        fontSize: 18,
      },
      scales: {
        yAxes: [{
          type: 'linear',
          ticks: {
            min: 0,
            stepSize: 1,
            padding: 15,
          }
        }]
      }
    }
  });
}
//Function to fill clicks and views array.
function fillArray() {
  for(var i =0; i < ImageCreator.allImages.length; i++){
    clicksArray[i] = ImageCreator.allImages[i].clicks;
    titleArray[i] = ImageCreator.allImages[i].title;
  }
}

//Functions that happen on page load - now including logic test for localStorage
if (localStorage.getItem('objectArray') === null) {
  new ImageCreator('bag', 'img/bag.jpg');
  new ImageCreator('banana', 'img/banana.jpg');
  new ImageCreator('bathroom', 'img/bathroom.jpg');
  new ImageCreator('boots', 'img/boots.jpg');
  new ImageCreator('breakfast', 'img/breakfast.jpg');
  new ImageCreator('bubblegum', 'img/bubblegum.jpg');
  new ImageCreator('chair', 'img/chair.jpg');
  new ImageCreator('cthulhu', 'img/cthulhu.jpg');
  new ImageCreator('dog-duck', 'img/dog-duck.jpg');
  new ImageCreator('dragon', 'img/dragon.jpg');
  new ImageCreator('pen', 'img/pen.jpg');
  new ImageCreator('pet-sweep', 'img/pet-sweep.jpg');
  new ImageCreator('scissors', 'img/scissors.jpg');
  new ImageCreator('shark', 'img/shark.jpg');
  new ImageCreator('sweep', 'img/sweep.png');
  new ImageCreator('tauntaun', 'img/tauntaun.jpg');
  new ImageCreator('unicorn', 'img/unicorn.jpg');
  new ImageCreator('usb', 'img/usb.gif');
  new ImageCreator('water-can', 'img/water-can.jpg');
  new ImageCreator('wine-glass', 'img/wine-glass.jpg');
} else { //Call the instances of image objects
  var retrievedArray = localStorage.getItem('objectArray');
  ImageCreator.allImages = JSON.parse(retrievedArray);
}
render();

//eventListener
ulEl.addEventListener('click', handleClicks);
