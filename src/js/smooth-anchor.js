/**
 * Smoothly scrolls to the anchor specified by the link to which this listener
 * is attached.
 */

export var scrollToAnchor = function(e) {
  e.preventDefault();

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}

/**
 * Adds or removes special styling to the header depending on the window's
 * current vertical position to make it fixed.
 */

export var windowScroll = function(e) {
  var header = document.querySelector('.js-head');
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (scrollTop > header.clientHeight) {
    header.classList.add('header-fixed');
  }
  else if (scrollTop <= header.clientHeight) {
    header.classList.remove('header-fixed');
  }
}