const swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.onscroll = function () {
  headerFunction();
};

// Get the header
const header = document.querySelector("#header");
const headerParent = document.querySelector("#header").parentElement;
const logo = document.querySelector("#logo");

function headerFunction() {
  if (window.pageYOffset > 30) {
    header.classList.add("sticky");
    headerParent.classList.add("headerFixed");
  } else {
    header.classList.remove("sticky");
    headerParent.classList.remove("headerFixed");
  }
}
