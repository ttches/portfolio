import './index.css';

document.addEventListener("DOMContentLoaded", function() {
  let fullHeightElement = document.getElementsByClassName('fullheight');

  function changeHeight() {
    let wheight = window.innerHeight;
    for (let i = 0; i < fullHeightElement.length; i++) {
      fullHeightElement[i].style.height = wheight + "px";
    }
  };

  changeHeight();

  window.addEventListener('resize', changeHeight);
});

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
