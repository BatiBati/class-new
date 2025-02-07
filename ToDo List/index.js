const input = document.querySelector("input");
const toDoList = document.querySelector(".valuesContainer");
const addBtn = document.querySelector(".inputContainer > button");

const isInput = null;

const toDos = () => {


  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  const valueContainer = document.createElement("div");

  valueContainer.innerHTML = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";

  const listItem = document.createElement("div");

  listItem.append(checkBox);
  listItem.append(valueContainer);
  listItem.append(deleteBtn);

  toDoList.append(listItem);
};

const inputTodo = () => {
  addBtn.addEventListener("click", () => {
    if (input.value === isInput) return;
    toDos();
  });
};
inputTodo();
