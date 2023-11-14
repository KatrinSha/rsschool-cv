const sliders = document.querySelectorAll("._slider-box ");
const sliderLine = document.querySelector(".education__slider-line");

let count = 0;
let width;

function onInit() {
  width = document.querySelector(".education__slider").offsetWidth;
  sliderLine.style.width = width * sliders.length + "px";
  sliders.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  scrollSlider();
}

onInit();
window.addEventListener("resize", onInit);

document.querySelector(".slider_button-next").addEventListener("click", () => {
  count++;
  if (count >= sliders.length) {
    count = 0;
  }
  scrollSlider();
});

document.querySelector(".slider_button-prev").addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = sliders.length - 1;
  }
  scrollSlider();
});

function scrollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

const headerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const hamburgerLine = document.querySelector(".hamburger__line");
headerButton.addEventListener("click", tooggleMenu);
function tooggleMenu() {
  navigation.classList.toggle("active");
  hamburgerLine.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navigation__link a");
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.toggle("active");
    hamburgerLine.classList.toggle("active");
  });
});

document.querySelector(".footer__button").onclick = () => {
  // переместим в начало страницы
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = () => {
  let scrollY = window.pageYOffset;
  if (scrollY !== 0) {
    document.querySelector(".header").style.backgroundColor = "#212529";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
};
