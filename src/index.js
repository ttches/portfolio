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
