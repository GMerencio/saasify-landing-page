var slideIndex = 0;
var slides = null;
var pages = null;

/**
 * Sets up the slideshow component with its pages and event listeners. It takes
 * an argument to determine whether or not the slideshow should change slides
 * automatically.
 */

export function initializeSlideshow(automatic) {
  
  // Initialize global variables.
  
  slides = document.getElementsByClassName("js-slideshow")[0].children;
  var pagesParent = document.getElementsByClassName("js-slide-control")[0];
  pages = pagesParent.children;
  
  // Create page elements and their respective event listeners.
  
  for (var i = 0; i < slides.length; i++) {
    var page = document.createElement("span");
    page.classList.add("circlet");
    page.dataset.index = i;
    
    page.addEventListener("click", function(e) {
      slideIndex = Number.parseInt(e.target.dataset.index);
      updateSlideshow();
    });
    
    pagesParent.appendChild(page);
  }
  
  // Update the slideshow.
  
  updateSlideshow();
  
  // Keep updating the index if it's an automatic slideshow.
  
  if(automatic) {
    setInterval(function() {
      slideIndex++;
      updateSlideshow();
    }, 4000);
  }
}

/**
 * Displays the slide corresponding to the current index and updates the
 * selected page.
 */

function updateSlideshow() {
  
  if (slideIndex >= slides.length)
    slideIndex = 0;
  
  if (slideIndex < 0)
    slideIndex = slides.length - 1;
  
  for (var i = 0; i < slides.length; i++) {
      if(i === slideIndex) {
        slides[i].classList.remove("slideshow__img--hidden");
        pages[i].classList.add("circlet--filled");
      }
      else {
        slides[i].classList.add("slideshow__img--hidden");
        pages[i].classList.remove("circlet--filled");
      }
  }
}