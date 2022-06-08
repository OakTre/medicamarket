import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
    },
    isClose: (modal) => {
      const $modal = modal.modalContainer;
      const cityInput = $modal.querySelector(".modal-city__input");

      if (cityInput) {
        cityInput.value = "";
        window.medikamarket_API.citySearchFilter.clear();
      }
    },
  });

  window.medikamarket_API.modal = modal;
};
