var buttonFind = document.querySelector(".button-find-hotels");
var formAnimate = document.querySelector(".calendar-hotel");

var form = document.querySelector("form");
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
  formAnimate.classList.toggle("fade-in");

  if (storage) {
    arrivals.value = storage
    departure.focus();
  } else {
    arrivals.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrivals.value || !departure.value) {
    evt.preventDefault();
    document.classList.add("form-error");
    document.offsetWidth = document.offsetWidth;
    document.classList.remove("form-error");
  } else {
    if (isStorageSupport)
    localStorage.setItem("arrivals", arrivals.value);
  }

});
