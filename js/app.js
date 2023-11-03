let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.target[0].value;
  if (!text) return alert("Matn kirgazish shart");
  if (text.length < 4) return alert("Matn kamida 4ta belgili boslish shart");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let editBtn = document.createElement("button");
  let icon = document.createElement("i");
  let editIcon = document.createElement("i");
  let checkbox = document.createElement("input");
  let span = document.createElement("span");
  span.classList.add("todo-title");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("todo-completed-checkbox");
  icon.classList.add("fa-solid", "fa-trash");
  editIcon.classList.add("fa-solid", "fa-pen");
  btn.classList.add("btn", "btn-danger");
  editBtn.classList.add("btn", "btn-warning");
  btn.append(icon);
  editBtn.append(editIcon);
  span.innerText = text;
  li.append(checkbox);
  li.append(span);
  li.classList.add("d-flex", "justify-content-between", "align-items-center");
  li.append(editBtn);
  li.append(btn);
  ul.append(li);

  btn.addEventListener("click", (e) => {
    if (confirm("Ishonchin komilmi?")) {
      let element = e.target;
      while (element.tagName !== "BUTTON") {
        element = element.parentElement;
      }
      element.parentElement.remove();
    }
  });

  editBtn.addEventListener("click", (e) => {
    let currentButton = e.target;
    while (currentButton.tagName !== "BUTTON")
      currentButton = currentButton.parentElement;

    let title = currentButton.previousElementSibling;
    title.setAttribute("contenteditable", true);
    title.focus();

    title.addEventListener("blur", (e) => {
      e.target.setAttribute("contenteditable", false);
    });
  });

  e.target.reset();
});

// let li = document.createElement("li");
// let btn = document.createElement("button");
// btn.classList.add("btn", "btn-danger");
// let icon = document.createElement("i");
// icon.classList.add("fa-solid", "fa-trash");
// btn.append(icon);
// li.textContent = "Kir yuvish";
// li.classList.add("d-flex", "justify-content-between", "align-items-center", 'maxsus');
// li.append(btn);
// ul.append(li);
// let li2 = document.createElement("li");
// li2.textContent = "Dazmol qilish";
// ul.appendChild(li2);
// let li3 = document.createElement("li");
// li3.textContent = "Dastur yozish";
// ul.prepend(li3);

// li.addEventListener("dblclick", (e) => {
//   // e.target.remove();
//   // e.target.nextElementSibling.remove();
//   // e.target.previousElementSibling.remove();
//   e.target.parentElement.remove();
//   // document.body.classList.replace("bg-light", "bg-danger");
// });
