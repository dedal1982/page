const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");

/***открытие бургера***/
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  // burgerOpenMobile.classList.toggle('header__mobile_open');
  scrollLock.classList.toggle("lock");
});
