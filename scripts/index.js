const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
const mobileMenu = document.querySelector(".burger-mobile-menu");
//открытие бургера
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});

//добавляем поле для загрузки фото
function addForm() {
  // Создаем новую строку формы
  var formRow = document.createElement("div");
  formRow.className = "formRow";

  // Создаем новый инпут
  var input = document.createElement("input");
  input.type = "file";

  // Создаем новую кнопку
  var button = document.createElement("button");
  button.className = "plusButton";
  button.innerText = "x";
  button.addEventListener("click", removeForm);

  // Добавляем инпут и кнопку в новую строку формы
  formRow.appendChild(input);
  formRow.appendChild(button);

  // Добавляем новую строку формы в контейнер
  var formContainer = document.getElementById("formContainer");
  formContainer.appendChild(formRow);
}

function removeForm(event) {
  // Получаем родительскую строку формы
  var formRow = event.target.parentNode;

  // Получаем контейнер форм
  var formContainer = document.getElementById("formContainer");

  // Удаляем строку формы из контейнера
  formContainer.removeChild(formRow);
}

// Получаем кнопку "+" и добавляем обработчик клика
var plusButton = document.querySelector(".plusButton");
plusButton.addEventListener("click", addForm);

//функция загрузки видеоролика только при клике на кнопку
function loadYouTubeVideo() {
  var youtubeVideoDiv = document.getElementById("youtubeVideo");
  youtubeVideoDiv.innerHTML =
    //фрейм ютюб-видео(сюда вставить iframe нужного ролика)
    '<iframe src="https://www.youtube.com/embed/oLY1rss9Jx8?si=-5eVgEZEd3nRIRP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}

//аккордеон
const buttons = document.querySelectorAll(".accord-title");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const closestButtonContainer = button.closest(".accord-item");
    if (closestButtonContainer) {
      const elementsToToggle = closestButtonContainer.querySelectorAll(
        ".accord-answer, .accord-plus"
      );
      elementsToToggle.forEach((element) => {
        element.classList.toggle("active");
      });
    }
  });
});
