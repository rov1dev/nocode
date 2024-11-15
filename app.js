let components = document.querySelectorAll("#aside div");
let blockComps = document.querySelectorAll("#document .element");
let block = document.getElementById("document");
const createElement = (what) => document.createElement(what);

components.forEach((item) => {
  item.addEventListener("click", () => {
    console.log('adasd');
    const newElement = createElement(item.getAttribute("data-value"));
    newElement.classList.add("element");
    block.appendChild(newElement);

    localStorage.setItem("html", JSON.stringify(block.innerHTML));
    newElement.addEventListener("dblclick", () => {
      block.removeChild(newElement);
    });
  });
});
