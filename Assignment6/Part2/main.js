/* <!--
	Name: Divyansh kumar
	File: main.js
	Date: 22 November 2023
	--> */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 1; i <= images.length; i++) {
	const newImage = document.createElement('img');
	newImage.setAttribute('src', `images/pic${i}.jpg`);
	newImage.setAttribute('alt', `Image/ ${i}`);
	thumbBar.appendChild(newImage);
	
	newImage.addEventListener('click', function() {
	  displayedImage.setAttribute('src', `images/pic${i}.jpg`);
	});
  }

/* Wiring up the Darken/Lighten button */
