let dot = document.getElementsByClassName("dot")[0];
dotStyle = window.getComputedStyle(dot);
console.log(dotStyle.getPropertyValue("height"));

function keyActions(e) {
  console.log(e.key);
  if (e.key === "ArrowRight") {
    dot.style.marginLeft += "10px";
  } else if (e.key === "ArrowLeft") {
    dot.style.marginRight = "10px";
  }
}

document.body.addEventListener("keydown", keyActions);
