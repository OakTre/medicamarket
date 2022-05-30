import SimpleBar from "simplebar";

export default () => {
  const containers = Array.from(document.querySelectorAll('.js-simple-bar'));

  containers.forEach(container => {
    const simpleBar = new SimpleBar(container);
  })
};
