"use client";
import { useState } from "react";
import style from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

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
  };

  return (
    <div className={style.container}>
      <h1>To-Do List</h1>
      <div className={style.input}>
        <input value={value} onChange={handleChange} placeholder="Add a new task..." />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className={style.types}>



        <div className={style.toDoTypes} >All</div>
        <div className={style.toDoTypes}>Active</div>
        <div className={style.toDoTypes}>Completed</div>



      </div>

      {list.map((item, index) => {
        return (
          <div className={style.todos} key={index}>
            <div className={style.todosItem}>
              <input
                type="checkbox"
                className={style.cursor}
                onChange={() => {
                  handleChecked(index);
                }}

              />
              <p className={item.isCompleted ? style.lineThrough : ""}>{item.value} </p>
            </div>
            <button className={style.deleteButton} onClick={() => {


              handleDelete(index)


            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
