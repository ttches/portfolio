import './index.css';
import * as resumePDF from './imgs/Cheswick Resume 2017.pdf';

//Makes resume anchor functional
const resumeAnchor = document.getElementById('resume');
resumeAnchor.addEventListener('click', () => window.open(resumePDF))

//Makes the nav cool and responsive
const imgContainer = document.querySelectorAll('.home-img-container');
//I don't use nav.offsetTop because it's jumpy after resizing
let navTop = imgContainer[0].offsetTop + imgContainer[0].offsetHeight;

function changeNavTop() {
  navTop = imgContainer[0].offsetTop + imgContainer[0].offsetHeight;
}

function fixNav() {
  if (window.scrollY >= navTop) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);
window.addEventListener('resize', changeNavTop);
