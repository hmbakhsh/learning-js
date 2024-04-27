// TO-DO LIST: FIND OUT HOW TO ADD EVENT LISTENERS FOR DYNAMICALLY RENDERED ELEMENTS
// Current issue is with `lmButton` -> error in console

// Elements as Variables
let body = document.body;
let unorderedList = document.getElementById("list");

let dmButton = document.getElementById("dark-btn");
let addButton = document.getElementById("add-li");
let delButton = document.getElementById("del-li");

// Interactivity Functions
function darkMode() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  body.style.fontFamily = "Arial";
  dmButton.innerHTML = "Light Mode";
  dmButton.id = "light-btn";
  let lmButton = document.getElementById("light-btn");
  lmButton.addEventListener("click", lightMode);
}

function lightMode(event) {
  event.target.removeEventListener("click", lightMode);
  body.style.backgroundColor = "white";
  body.style.color = "black";
  event.target.innerHTML = "Dark Mode";
  event.target.id = "dark-btn";
  event.target.addEventListener("click", darkMode);
}

function addLi() {
  let num = unorderedList.children.length + 1;
  let newLi = document.createElement("li");
  newLi.innerHTML = `List Item ${num}`;
  unorderedList.appendChild(newLi);
}

function removeLi() {
  let num = unorderedList.children.length - 1;
  let newestLi = unorderedList.children[num];
  unorderedList.removeChild(newestLi);
}

// Event Listeners linked to Functions
dmButton.addEventListener("click", darkMode);
addButton.addEventListener("click", addLi);
delButton.addEventListener("click", removeLi);
