'use strict';

/* Global variables declaration */
var ulEl = document.getElementById('container');
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');
var ulEl2 = document.getElementById('listContainer');
var liEl = document.createElement('li');
var totalClicks = 26;
ImageCreator.allImages = [];
var randoNum = 0;
var comparisonValues = [null, null, null];

/* Constructor function */
function ImageCreator(title, filepath) {
  this.title = title;
  this.filepath = filepath;
  this.clicks = 0;
  this.views = 0;
  ImageCreator.allImages.push(this);

}

//Instances of image objects
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
    listCreator();
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

//Target the listContainer id to create new li elements that then propagate the data to display.
function listCreator() {
  for(var i = 0; i < ImageCreator.allImages.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = ImageCreator.allImages[i].clicks + ' votes for the ' + ImageCreator.allImages[i].title;
    ulEl2.appendChild(liEl);
  }
}


//Functions that happen on page load
render();
randomGen();

//eventListener
ulEl.addEventListener('click', handleClicks);
