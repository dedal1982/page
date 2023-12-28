const swiper = new Swiper(".bought-out-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".bought-out-next",
    prevEl: ".bought-out-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
