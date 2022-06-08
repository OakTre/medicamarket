export default () => {
  const btns = Array.from(document.querySelectorAll(".js-popup-open"));
  const popups = Array.from(document.querySelectorAll(".js-popup"))
  let isPopupOpen = false;

  function closePopups() {
    popups.forEach(element => { element.classList.remove("is-shown"); })
    isPopupOpen = false;
  };

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentContainer = btn.closest(".js-popup-parent");
      const popup = parentContainer.querySelector(".js-popup");

      closePopups();

      switch (isPopupOpen) {
        case false:
          window.medikamarket_API.closeSearchResults();
          popup.classList.add("is-shown");
          isPopupOpen = true;
          break;
        case true:
          popup.classList.remove("is-shown");
          isPopupOpen = false;
          break;
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest('.js-popup-parent') && isPopupOpen === true) {
      closePopups();
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      if (isPopupOpen) {
        closePopups()
      }
    }
  });

  window.medikamarket_API.closePopups = () => {
    closePopups();
  };
};
