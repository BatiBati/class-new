const input = document.querySelector("input");
const toDoList = document.querySelector(".valuesContainer");
const addBtn = document.querySelector(".inputContainer > button");

const toDos = () => {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  // if(toDoList.div.div === classList("checkedClass")) {

  // }

  //     checkBox.addEventListener("change", () => {
  //         valueContainer.classList.add("checkedClass");
  //       });

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
    toDos();
  });
};
inputTodo();
