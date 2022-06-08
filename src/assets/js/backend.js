document.addEventListener("DOMContentLoaded", function (event) {
  // поиск в шапке и показ результатов
  let timerDelay;
  const searchInput = document.querySelector(".js-search-input");
  const searchResults = document.querySelector(".js-search-results");
  const headerCrossBtn = document.querySelector(".js-search-btn");

  const closeSearchResults = () => {
    searchResults.classList.remove("is-shown");
    searchInput.value = "";
    headerCrossBtn.classList.remove("is-cross-shown");
  };

  window.medikamarket_API.closeSearchResults = () => {
    closeSearchResults();
  };

  // очищение инпута и скрытие результатов по клику на крестик
  headerCrossBtn.addEventListener("click", ()=> {
    closeSearchResults();
  });

  searchInput.addEventListener("keyup", () => {
    clearTimeout(timerDelay);

    timerDelay = setTimeout(() => {
      // показываем контент после подставновки результатов поиска
      searchResults.classList.add("is-shown");
      searchInput.closest("form").querySelector(".js-search-btn").classList.add("is-cross-shown");

      // убираем контент если пустое поле ввода
      if (searchInput.value === "") {
        closeSearchResults();
      }
    }, 300);
  });
});
