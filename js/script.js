var buttonFind = document.querySelector(".button-find-hotels");
var buttonOff = document.querySelector(".calendar-hotel-off");
var buttonAnimate = document.querySelector(".slide-down");

buttonFind.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonOff.classList.toggle("calendar-hotel-off");
  buttonAnimate.classList.toggle("slide-down");
})
