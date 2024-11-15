let components = document.querySelectorAll("#aside div");
let block = document.getElementById("document");
let panel = document.getElementById("panel");
let activeElement = null;
block.innerHTML = JSON.parse(localStorage.getItem("html")) || "";
const createElement = (what) => document.createElement(what);
const addClickListener = (element) => {
    element.addEventListener("click", () => {
      activeElement = element;
      panel.classList.toggle("non-active");
    });
  }

const removeClickListener = (element) => {
  if (activeElement) {
    block.removeChild(element);
    activeElement = null;
    panel.classList.add("non-active");
    localStorage.setItem("html", JSON.stringify(block.innerHTML));
  }
};
document.querySelectorAll("#document .element").forEach((element) => {
  addClickListener(element);
});

components.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("adasd");
    const newElement = createElement(item.getAttribute("data-value"));
    newElement.classList.add("element");
    block.appendChild(newElement);

    localStorage.setItem("html", JSON.stringify(block.innerHTML));
    removeClickListener(newElement);
    addClickListener(newElement);
  });
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Delete" || e.key === "Backspace") {
    removeClickListener(activeElement);
  }
});
