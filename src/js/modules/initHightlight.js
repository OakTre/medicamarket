import PageFilter from "./HighlightElemnts";

export default () => {
  const btns = Array.from(document.querySelectorAll(".js-highlighted-element"));
  const citySearchinput = document.querySelector(".modal-city__input");

  const citySearchFilter = new PageFilter('#search', {
    childClass: 'highlighted-element',
    hiddenClass: 'is-hidden',
    highlightClass: 'highlighted'
  });

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const dataCity = btn.dataset.city;
      citySearchinput.value = dataCity;

      citySearchFilter.clear();
    });
  });

  window.medikamarket_API.citySearchFilter = citySearchFilter;
};
