// Dark and Light mode functionalities
// Element Selector
const mode = document.querySelector(".mode");
mode.addEventListener("click", () => {
  const table = document.querySelector("table");
  const tbody = document.querySelector("tbody");
  const title = document.querySelector(".title");
  const currentMode = "Light";
  if (mode.textContent === currentMode) {
    mode.textContent = "Dark";
    title.style.color = "var(--dark)";
    table.style.background = "var(--white)";
    tbody.style.background = "var(--light)";
  } else {
    mode.textContent = currentMode;
    title.style.color = "";
    table.style.background = "";
    tbody.style.background = "";
  }
});
// Calculator Functionality
const deleteData = document.querySelector(".delete");
const display = document.querySelector(".display");
const results = document.querySelector(".answer");

function calcolate(value) {
  display.innerText += value;
}
deleteData.onclick = () => {
  display.innerText = "";
};
results.onclick = () => {
  let result = display.innerText;
  result = eval(result);
  display.innerText = result;
};
