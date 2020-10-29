const swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
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
    headerParent.classList.add("headerFixed");
  }
}

const listaLink = document.querySelectorAll(".lista-link li a");
function preventDefault(event) {
  event.preventDefault();
}
listaLink.forEach((link) => {
  link.addEventListener("click", preventDefault);
});
