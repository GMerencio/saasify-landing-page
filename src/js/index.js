import smoothscroll from 'smoothscroll-polyfill';
import 'normalize.css';
import './../scss/main.scss';

/**
 * Smoothly scrolls to the anchor specified by the link to which this listener
 * is attached.
 */

function scrollToAnchor(e) {
  e.preventDefault();

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}

/**
 * Adds or removes special styling to the header depending on the window's
 * current vertical position to make it fixed.
 */

function windowScroll(e) {
  var header = document.querySelector('.js-head');
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  console.log("Current header height: " + header.clientHeight);
  console.log("Current scrollTop: " + scrollTop);
  
  if (scrollTop > header.clientHeight) {
    header.classList.add('header-fixed');
  }
  else if (scrollTop <= header.clientHeight) {
    header.classList.remove('header-fixed');
  }
}

/* Once the page has finished loading, run the polyfill and add the event
listeners */

window.onload = function() {
  smoothscroll.polyfill();
  window.onscroll = windowScroll;
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', scrollToAnchor);
  });
};