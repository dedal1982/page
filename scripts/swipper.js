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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    835: {
      slidesPerView: 3.3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperReviews = new Swiper(".reviews-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    835: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1194: {
      slidesPerView: 3.3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperAny = new Swiper(".any-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 7,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
