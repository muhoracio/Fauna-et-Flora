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
const logo = document.querySelector("#logo");

function headerFunction() {
  if (window.pageYOffset > 30) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const listaLink = document.querySelectorAll(".lista-link li a");
function preventDefault(event) {
  event.preventDefault();
}
listaLink.forEach((link) => {
  link.addEventListener("click", preventDefault);
});
