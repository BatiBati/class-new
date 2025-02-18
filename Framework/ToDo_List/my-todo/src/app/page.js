"use client";
import { useState } from "react";
import style from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value === "") return alert("Please enter Todo");

    setList([...list, { isCompleted: false, value: value }]);
    setValue("");
  };

  const handleChecked = (index) => {
    const newlistArr = [...list];
    newlistArr[index].isCompleted = !newlistArr[index].isCompleted;

    setList(newlistArr);
  };

  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);

    setList(newList);
    console.log(newList);
  };

  const filteredList = list.filter((item, index) => {
    if (selectedType === "All") return true;
    if (selectedType === "Completed") return item.isCompleted === true;
    if (selectedType === "Active") return item.isCompleted == false;
  });

  return (
    <div className={style.container}>
      <h1>To-Do List</h1>
      <div className={style.input}>
        <input
          value={value}
          onChange={handleChange}
          placeholder="Add a new task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className={style.types}>
        <div
          className={style.toDoTypes}
          style={{
            backgroundColor: selectedType === "All" ? "#3c82f6" : "",
            color: selectedType == "All" ? "white" : "",
          }}
          onClick={() => {
            setSelectedType("All");
          }}
        >
          All
        </div>
        <div
          className={style.toDoTypes}
          style={{
            backgroundColor: selectedType === "Active" ? "#3c82f6" : "",
            color: selectedType == "Active" ? "white" : "",
          }}
          onClick={() => {
            setSelectedType("Active");
          }}
        >
          Active
        </div>
        <div
          className={style.toDoTypes}
          style={{
            backgroundColor: selectedType === "Completed" ? "#3c82f6" : "",
            color: selectedType == "Completed" ? "white" : "",
          }}
          onClick={() => {
            setSelectedType("Completed");
          }}
        >
          Completed
        </div>
      </div>

      {filteredList.map((item, index) => {
        return (
          <div className={style.todos} key={item.value + index}>
            <div className={style.todosItem}>
              <input
                type="checkbox"
                checked={item.isCompleted}
                className={style.cursor}
                onChange={() => {
                  handleChecked(index);
                }}
              />
              <p className={item.isCompleted ? style.lineThrough : ""}>
                {item.value}
              </p>
            </div>
            <button
              className={style.deleteButton}
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
