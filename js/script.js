var buttonFind = document.querySelector(".button-find-hotels");
var formAnimate = document.querySelector(".calendar-hotel");

var arrivals = document.querySelector("[name=arrivals]")
var departure = document.querySelector("[name=departure]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrivals");
} catch (err) {
  isStorageSupport = false;
}

buttonFind.addEventListener("click", function (evt) {
  evt.preventDefault();
  formAnimate.classList.add("fade-in");
  formAnimate.classList.toggle("calendar-hotel-off");
  setTimeout(function() {
    formAnimate.classList.remove("fade-in");
  }, 1050);
  if (storage) {
    arrivals.value = storage;
    departure.focus();
  } else {
    arrivals.focus();
  }
});

formAnimate.addEventListener("submit", function (evt) {
  if (!arrivals.value || !departure.value) {
    evt.preventDefault();
    formAnimate.classList.add("form-error");
    document.offsetWidth = document.offsetWidth;
    setTimeout(function() {
      formAnimate.classList.remove("form-error");
    }, 650);
  } else {
    if (isStorageSupport)
      localStorage.setItem("arrivals", arrivals.value);
  }
});
