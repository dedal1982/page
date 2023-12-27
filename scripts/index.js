const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
const mobileMenu = document.querySelector(".burger-mobile-menu");

/***открытие бургера***/
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});
