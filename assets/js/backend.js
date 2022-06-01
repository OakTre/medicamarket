document.addEventListener("DOMContentLoaded", function (event) {
  // поиск в шапке и показ результатов
  let timerDelay;
  const searchInput = document.querySelector(".js-search-input");
  const searchResults = document.querySelector(".js-search-results");
  const headerCrossBtn = document.querySelector(".js-search-btn");

  // очищение инпута и скрытие результатов по клику на крестик
  headerCrossBtn.addEventListener("click", ()=> {
    searchResults.classList.remove("is-shown");
    searchInput.value = "";
    headerCrossBtn.classList.remove("is-cross-shown");
  });

  searchInput.addEventListener("keyup", () => {
    clearTimeout(timerDelay);

    timerDelay = setTimeout(() => {
      // показываем контент после подставновки результатов поиска
      searchResults.classList.add("is-shown");
      searchInput.closest("form").querySelector(".js-search-btn").classList.add("is-cross-shown");

      // убираем контент если пустое поле ввода
      if (searchInput.value === "") {
        searchResults.classList.remove("is-shown");
        searchInput.closest("form").querySelector(".js-search-btn").classList.remove("is-cross-shown");
      }
    }, 300);
  });
});
