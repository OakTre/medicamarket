export default () => {
  const catalogMenu = document.querySelector('.catalog-menu');
  const catalogMenubtn = document.querySelector('.js-open-catalog-menu');
  const header = document.querySelector('.header');
  const hoverParents = Array.from(document.querySelectorAll(".js-hover-parent"));
  const hoverChilds = Array.from(document.querySelectorAll(".js-hover-child"));
  let isOpen = false;

  const closeCatalogModal = () => {
    catalogMenu.classList.remove("is-active");
    catalogMenubtn.classList.remove("is-active");

    setTimeout(() => {
      hoverParents.forEach(parent => {
        parent.classList.remove("is-active");
      });
      hoverParents[0].classList.add("is-active");

      hoverChilds.forEach(child => {
        child.classList.remove("is-active");
      });
      hoverChilds[0].classList.add("is-active");
    }, 250);

    isOpen = false;
  };

  const openCatalogModal = () => {
    catalogMenu.classList.add("is-active");
    catalogMenubtn.classList.add("is-active");
    isOpen = true;
  };

  catalogMenubtn.addEventListener('click', () => {
    switch (isOpen) {
      case false:
        openCatalogModal();
        break;
      case true:
        closeCatalogModal();
        break;
    }
  });

  header.addEventListener('click', (e) => {
    if (e.target.closest('.header__container') && !e.target.classList.contains('header__catalog-btn') && isOpen === true) {
      closeCatalogModal();
    }
  });

  catalogMenu.addEventListener('click', (e) => {
    if (!e.target.classList.contains('catalog-menu__container') && !e.target.closest('.catalog-menu__container') && isOpen === true) {
      closeCatalogModal();
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
      if (isOpen) {
        closeCatalogModal();
      }
    }
  });
};
