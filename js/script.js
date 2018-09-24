var buttonFind = document.querySelector(".button-find-hotels");
var buttonAnimate = document.querySelector(".fade-in");

buttonFind.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonAnimate.classList.toggle("fade-in");
})
