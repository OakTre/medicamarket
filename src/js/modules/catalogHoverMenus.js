export default () => {
  const hoverParents = Array.from(document.querySelectorAll(".js-hover-parent"));
  const hoverChilds = Array.from(document.querySelectorAll(".js-hover-child"));

  hoverParents.forEach((parent, index) => {
    parent.addEventListener("mouseenter", () => {
      hoverParents.forEach(prnt => {prnt.classList.remove("is-active")});
      parent.classList.add("is-active");

      hoverChilds.forEach(child => {child.classList.remove("is-active")});
      hoverChilds[index].classList.add("is-active");
    });
  });
};
