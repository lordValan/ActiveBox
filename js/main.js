//
// slider
//
var slides = document.getElementsByClassName("client");
var buttons = document.getElementsByClassName("slider-btn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', changeSlide);
}

function changeSlide(btn) {
  var currentSlide = document.getElementsByClassName("chosen-client")[0];
  var currentSlideIndex = indexOf(slides, currentSlide);
  var clickedBtnIndex = indexOf(buttons, btn.target);

  if (clickedBtnIndex == currentSlideIndex)
    return;

  buttons[currentSlideIndex].classList.remove("active-slider-btn");
  slides[currentSlideIndex].classList.remove("chosen-client");

  buttons[clickedBtnIndex].classList.add("active-slider-btn");
  slides[clickedBtnIndex].classList.add("chosen-client");
}

function indexOf(array, searchedItem) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == searchedItem)
      return i;
    else
      continue;
  }
  return -1;
}
//
// gallery
//
var modal = document.getElementsByClassName("modal")[0];
var modal_img = document.getElementsByClassName("modal-img")[0];
var items = document.getElementsByClassName("cont-item");
var closerBt = document.querySelector(".modal>.wrapper>.closer");

for (var i = 0; i < items.length; i++)
  items[i].addEventListener('click', clickItem);
closerBt.addEventListener('click', clickItem);

function clickItem(e) {
  if (e.target.className == "closer") {
    modal.style.display = "none";
    return;
  }
  var str = e.currentTarget.children[0].getAttribute("src");
  modal_img.setAttribute("src", str);
  modal.style.display = "block";
}
//
// responsive navigation
//
var bt = document.getElementsByClassName("show-nav-bt")[0];
var navigation = document.getElementsByTagName("nav")[0];

bt.addEventListener('click', openNav);
document.getElementsByClassName("closer")[0].addEventListener('click', openNav);

function openNav(e) {
  if (!navigation.classList.contains("shown-nav")) {
    navigation.classList.add("shown-nav");
  } else {
    navigation.classList.remove("shown-nav");
  }
}
window.onresize = function hideNav() {
  if (window.innerWidth > 1150 && navigation.classList.contains("shown-nav"))
    navigation.classList.remove("shown-nav");
}
//
// scroll navigation
//
var nav_block = document.getElementsByClassName("nav-block")[0];
var nav_wr = document.getElementsByClassName("nav-wrapper")[0];

window.onscroll = function scrollNav() {
  if (window.pageYOffset > 20) {
    if (!nav_block.classList.contains("scrolled")) {
      nav_block.classList.add("scrolled");
      nav_wr.classList.add("scrolled-wr");
    } else {
      return;
    }
  } else {
    if (nav_block.classList.contains("scrolled")) {
      nav_block.classList.remove("scrolled");
      nav_wr.classList.remove("scrolled-wr");
    } else {
      return;
    }
  }
};
window.onload = function scrl() {
  window.scrollTo(0, window.pageYOffset - 1);
}
