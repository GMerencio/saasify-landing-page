var MONTH_PRICES = [89.99, 119.99, 139.99];
var QUARTER_PRICES = [309.99, 419.99, 489.99];
export var PRICING_OPTIONS = {MONTHLY: "month", QUARTERLY: "quarter"};

/**
 * Fills in the prices according to the argument, which is one of the
 * PRICING_OPTIONS objects. It also changes the suffix appropriately (e.g., /mo
 * for monthly or /qr for quarterly) and marks the approppriate label.
 */

export var fillPrices = function(opt) {
  var prices = document.querySelectorAll(".js-price");
  
  for(var i = 0; i < prices.length; i++) {
    if(opt === PRICING_OPTIONS.MONTHLY) {
      prices[i].innerHTML = MONTH_PRICES[i];
      prices[i].classList.remove("txt-price--quarterly");
      prices[i].classList.add("txt-price--monthly");
    }
    
    else if(opt === PRICING_OPTIONS.QUARTERLY) {
      prices[i].innerHTML = QUARTER_PRICES[i];
      prices[i].classList.remove("txt-price--monthly");
      prices[i].classList.add("txt-price--quarterly");
    }
  }
  
  // Give emphasis to the label corresponding to the selected option.
  
  var monthlyOpt = document.querySelector(".js-monthly-txt");
  var quarterlyOpt = document.querySelector(".js-quarterly-txt");
  
  if(opt === PRICING_OPTIONS.MONTHLY) {
    monthlyOpt.classList.add("txt-selected");
    quarterlyOpt.classList.remove("txt-selected");
  } else if(opt === PRICING_OPTIONS.QUARTERLY) {
    monthlyOpt.classList.remove("txt-selected");
    quarterlyOpt.classList.add("txt-selected");
  }
}