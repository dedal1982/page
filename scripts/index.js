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
// Получаем все элементы с классом accord-title
// Получаем все элементы с классом "accord-title"
var accordTitles = document.getElementsByClassName("accord-title");

// Проходим по всем элементам "accord-title" и добавляем обработчик события клика
for (var i = 0; i < accordTitles.length; i++) {
  accordTitles[i].addEventListener("click", function () {
    // При клике на элемент "accord-title" добавляем/удаляем класс "active"
    this.classList.toggle("active");

    // Получаем элемент "accord-answer", который находится в том же родительском элементе
    var accordAnswer = this.nextElementSibling;

    // При клике на элемент "accord-title" также добавляем/удаляем класс "active" для "accord-answer"
    accordAnswer.classList.toggle("active");
  });
}

// const makeCodeUniversal = (
//   tabItemsQuery,
//   formItemsQuery,
//   tabClassName = "active"
// ) => {
//   const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
//   const formItems = Array.from(document.querySelectorAll(formItemsQuery));

//   const clearActiveTabs = (element) => {
//     element.find((item) => item.classList.remove(tabClassName));
//   };

//   const setActiveTab = (element, index) => {
//     element[index].classList.add(tabClassName);
//   };

//   const chekTab = (item, index) => {
//     item.addEventListener("click", () => {
//       clearActiveTabs(tabItems);
//       clearActiveTabs(formItems);

//       setActiveTab(tabItems, index);
//       setActiveTab(formItems, index);
//     });
//   };
//   tabItems.forEach(chekTab);
// };
// // /*табы / секция Наши реализованные проекты*/
// makeCodeUniversal(".accord-title", ".accord-answer");
