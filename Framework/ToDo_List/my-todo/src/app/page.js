"use client";
import { useState } from "react";
import style from "./page.module.css";

export default function Home() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const [idCount, setIdCount] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value === "") return alert("Please enter Todo");
    setList([...list, { isCompleted: false, value: value, id: idCount }]);
    setIdCount(idCount + 1);
    setValue("");
  };

  const handleChecked = (id) => {

    const newlistArr = [...list];
    for (let i = 0; i <= newlistArr.length; i++) {

      if (newlistArr[i].id === id) {
        newlistArr[i].isCompleted = !newlistArr[i].isCompleted;
        setList(newlistArr);
        console.log(newlistArr[i]);

      }
    }
  };




  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const filteredList = list.filter((item, index) => {
    if (selectedType === "All") return true;
    if (selectedType === "Completed") return item.isCompleted === true;
    if (selectedType === "Active") return item.isCompleted == false;
  });


  const checkedList = filteredList.filter((item) => {
    if (item.isCompleted === true) return true;
  });

  const deleteCompletedTasks = () => {
    const clearComplete = list.filter((item) => {
      return item.isCompleted === false;
    });
    setList(clearComplete);
  };

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
      {filteredList.length == 0 ? (
        <div className={style.noTasks}>No tasks yet. Add one above!</div>
      ) : (
        filteredList.map((item, index) => {
          return (
            <>
              <div className={style.todos} key={item.value + index}>
                <div className={style.todosItem}>
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    className={style.cursor}
                    onChange={() => {
                      handleChecked(item.id);
                    }}
                  />
                  <p className={item.isCompleted ? style.lineThrough : ""}>
                    {item.value}
                  </p>
                </div>
                <button
                  className={style.deleteButton}
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        })
      )}
      {filteredList.length === 0 ? (
        ""
      ) : (
        <div className={style.bot}>
          <p>
            {checkedList.length} of {filteredList.length} tasks completed
          </p>
          <div
            onClick={() => {
              deleteCompletedTasks();
            }}
          >
            Clear completed
          </div>
        </div>
      )}

      <div className={style.footer}>
        Powered by <p>Pinecone academy</p>
      </div>
    </div>
  );
}
