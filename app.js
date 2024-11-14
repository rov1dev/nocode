let components = document.querySelectorAll("#aside div");
let blockComps = document.querySelectorAll("#document .element");
let block = document.getElementById("document");
let activeItem = null;
const createElement = (what) => document.createElement(what);

components.forEach((item) => {
  item.addEventListener("click", () => {
    const newElement = createElement(item.getAttribute("data-value"));
    newElement.classList.add("element");
    block.appendChild(newElement);

    localStorage.setItem("html", JSON.stringify(block.innerHTML));
    blockComps = document.querySelectorAll("#document .element");

    blockComps.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("togle");
        activeItem = item;
      });
    });
  });
});
