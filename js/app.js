'use strict';

/* Global variables declaration */
var ulEl = document.getElementById('container');
var leftImg = document.getElementById('left');
var centerImg = document.getElementById('center');
var rightImg = document.getElementById('right');
var totalClicks = 25;
var allImages = [];

/* Constructor function */
function ImageCreator(title, filepath, clicks, views) {
  this.title = title;
  this.filepath = filepath;
  this.clicks = clicks;
  this.views = views;
  allImages.push(this);

}

/* Methods */
//This is the random number generator from 0 to 19 to choose the index of the image to display
function randomGen() {
  var randoNum = Math.floor(Math.random() * 19);
  console.log(randoNum);
} 
randomGen();
//eventListener ulEl.addEventListener('click', call render?)
//render

new ImageCreator('bag', 'img/bag.jpg', 0, 0);
new ImageCreator('banana', 'img/banana.jpg', 0, 0);
new ImageCreator('bathroom', 'img/bathroom.jpg', 0, 0);
new ImageCreator('boots', 'img/boots.jpg', 0, 0);
new ImageCreator('breakfast', 'img/breakfast.jpg', 0, 0);
new ImageCreator('bubblegum', 'img/bubblegum.jpg', 0, 0);
new ImageCreator('chair', 'img/chair.jpg', 0, 0);
new ImageCreator('cthulhu', 'img/cthulhu.jpg', 0, 0);
new ImageCreator('dog-duck', 'img/dog-duck.jpg', 0, 0);
new ImageCreator('dragon', 'img/dragon.jpg', 0, 0);
new ImageCreator('pen', 'img/pen.jpg', 0, 0);
new ImageCreator('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
new ImageCreator('scissors', 'img/scissors.jpg', 0, 0);
new ImageCreator('shark', 'img/shark.jpg', 0, 0);
new ImageCreator('sweep', 'img/sweep.jpg', 0, 0);
new ImageCreator('tauntaun', 'img/tauntaun.jpg', 0, 0);
new ImageCreator('unicorn', 'img/unicorn.jpg', 0, 0);
new ImageCreator('usb', 'img/usb.gif', 0, 0);
new ImageCreator('water-can', 'img/water-can.jpg', 0, 0);
new ImageCreator('wine-glass', 'img/wine-glass.jpg', 0, 0);
