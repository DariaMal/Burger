const right = document.querySelector("#right");
const left = document.querySelector("#left");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);
const totalItem = items.querySelectorAll('.slider__item').length;
const maxWidth = items.offsetWidth * (totalItem - 1);

right.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }
  
  if (currentRight < maxWidth) {
    items.style.right = currentRight + items.offsetWidth + "px";
  } else {
    items.style.right = "0px";
  }
});
  
left.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    items.style.right = currentRight - items.offsetWidth + "px";
  } else {
    items.style.right = maxWidth + 'px';
  }
});