var buttonFind = document.querySelector(".button-find-hotels");
var buttonOff = document.querySelector(".calendar-hotel-off");

buttonFind.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonOff.classList.toggle("calendar-hotel-off");
})
