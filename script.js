const inputHTML = document.getElementById("inputHTML");
const rawDiv = document.getElementById("raw");
const textDiv = document.getElementById("text");
const renderedDiv = document.getElementById("rendered");

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function hideAll() {
  rawDiv.style.display = "none";
  textDiv.style.display = "none";
  renderedDiv.style.display = "none";
}

function showRaw() {
  hideAll();
  const decoded = decodeHTML(inputHTML.value);
  rawDiv.textContent = decoded;
  rawDiv.style.display = "block";
}

function showText() {
  hideAll();
  const decoded = decodeHTML(inputHTML.value);
  const temp = document.createElement("div");
  temp.innerHTML = decoded;
  textDiv.textContent = temp.innerText;
  textDiv.style.display = "block";
}

function showRendered() {
  hideAll();
  const decoded = decodeHTML(inputHTML.value);
  renderedDiv.innerHTML = decoded;
  renderedDiv.style.display = "block";
}

document.getElementById("btnRaw").addEventListener("click", showRaw);
document.getElementById("btnText").addEventListener("click", showText);
document.getElementById("btnRendered").addEventListener("click", showRendered);