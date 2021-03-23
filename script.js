const h2 = document.createElement("h2");
h2.textContent = "[Crystal Akins]";

document.querySelector("body").appendChild(h2);

const h3 = document.createElement("h3");
h3.textContent = "I'm Super Excited!!";

document.querySelector("body").appendChild(h3);

const h1Click = document.querySelector("h1");
const h2Click = document.querySelector("h2");
const h3Click = document.querySelector("h3");

function clickMe() {
  alert("Add a bit of JavaScript");
}
h1Click.addEventListener("click", clickMe);
h2Click.addEventListener("click", clickMe);
h3Click.addEventListener("click", clickMe);
