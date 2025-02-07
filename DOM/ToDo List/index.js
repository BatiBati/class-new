const input = document.querySelector("input");
const toDoList = document.querySelector(".valuesContainer");
const addBtn = document.querySelector(".inputContainer > button");

console.log(typeof input.value);

const toDos = () => {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  const valueContainer = document.createElement("div");
  valueContainer.innerHTML = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";

  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  const listItem = document.createElement("div");

  listItem.append(checkBox);
  listItem.append(valueContainer);
  listItem.append(deleteBtn);

  toDoList.append(listItem);
};

const inputTodo = () => {
  addBtn.addEventListener("click", () => {
    if (input.value !== "") {
      toDos();
      input.value = "";
    } else {
      return alert("Please enter Todo");
    }
  });
};
inputTodo();
