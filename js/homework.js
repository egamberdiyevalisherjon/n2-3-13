let tablo = document.querySelector("#jumbotron");
let form = document.querySelector("form");
let transports = document.querySelectorAll("[data-transport]");

function calc(masofa, tezlik) {
  return masofa / tezlik;
}

function displayTime(masofa, tezlik) {
  let vaqt = calc(masofa, tezlik);
  let text =
    "Siz " +
    masofa +
    "km masofani " +
    tezlik +
    "km/soat tezlikda " +
    vaqt.toFixed(2) +
    "soat vaqt ichida bosib o'ta olasiz.";

  tablo.innerText = text;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let masofa = e.target[0].value;
  if (!masofa) {
    alert("Masofa kiriting!");
    return;
  }
  let transport = e.target[1].value;
  let selector = "[data-transport=" + transport + "]";
  let tezlik = document.querySelector(selector).getAttribute("data-speed");

  displayTime(masofa, tezlik);
});

transports.forEach((t) => {
  t.addEventListener("click", (e) => {
    let element = e.target;
    while (element.tagName !== "DIV") {
      element = element.parentElement;
    }

    let select = form[1];
    let masofa = form[0].value;
    let tezlik = element.getAttribute("data-speed");
    displayTime(masofa, tezlik);
    select.value = element.getAttribute("data-transport");
  });
});
