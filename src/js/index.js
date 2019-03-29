import smoothscroll from 'smoothscroll-polyfill';
import { PRICING_OPTIONS, fillPrices } from './prices';
import { windowScroll, scrollToAnchor } from './smooth-anchor';
import { initializeSlideshow } from './slideshow';
import 'normalize.css';
import './../scss/main.scss';

window.onload = function() {
  smoothscroll.polyfill();
  
  // Fill in prices and add event listeners for changes in pricing option.
  
  fillPrices(PRICING_OPTIONS.MONTHLY);
  
  var checkBox = document.querySelector(".js-pricing-checkbox");
  checkBox.addEventListener("click", function(event) {
    if(checkBox.checked) {
      fillPrices(PRICING_OPTIONS.QUARTERLY);
    } else {
      fillPrices(PRICING_OPTIONS.MONTHLY);
    }
  });
  
  // Add event listeners for smooth scrolling when clicking anchor links.
  
  window.onscroll = windowScroll;
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', scrollToAnchor);
  });
  
  // Initialize slideshow component.
  
  initializeSlideshow();
};