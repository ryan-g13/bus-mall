'use strict';

/* Global variables declaration */
var ulEl = document.getElementById('container');
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');
var totalClicks = 25;
ImageCreator.allImages = [];
var randoNum = 0;
var randomValue1 = 0;
var randomValue2 = 0;
ImageCreator.viewsIndex = [];

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
  randoNum = Math.floor(Math.random() * ImageCreator.allImages.length);
}

//render first iteration just display one image from the array targeting img tags
function render() {
  leftImg.src = ImageCreator.allImages[randoNum].filepath;
  leftImg.title = ImageCreator.allImages[randoNum].title;
  leftImg.alt = ImageCreator.allImages[randoNum].title;
  randomValue1 = randoNum;
  ImageCreator.viewsIndex.push(randomValue1);
  randomGen();
  if (randomValue1 === randoNum ) {
    randomGen();
  } else {
    centerImg.src = ImageCreator.allImages[randoNum].filepath;
    centerImg.title = ImageCreator.allImages[randoNum].title;
    centerImg.alt = ImageCreator.allImages[randoNum].title;
    randomValue2 = randoNum;
    ImageCreator.viewsIndex.push(randomValue2);
  }
  randomGen();
  if (randomValue1 === randoNum || randomValue2 === randoNum) {
    randomGen();
  } else {
    rightImg.src = ImageCreator.allImages[randoNum].filepath;
    rightImg.title = ImageCreator.allImages[randoNum].title;
    rightImg.alt = ImageCreator.allImages[randoNum].title;
    ImageCreator.viewsIndex.push(randoNum);
  }
  randomGen();
}

render();
randomGen();

//eventListener
ulEl.addEventListener('click', render);