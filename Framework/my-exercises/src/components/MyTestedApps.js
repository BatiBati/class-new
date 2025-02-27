"use client";
import style from "@/styles/myTestedApps.module.css";

import { useState } from "react";
// --------Decrement and Increment ---------------------

// export default function MyTestedApps() {
//   const [count, setCount] = useState(0);

//   const minus = () => {
//     const nemeh = count - 1;
//     setCount(nemeh);
//   };

//   const plus = () => {
//     const hasah = count + 1;
//     setCount(hasah);
//   };

//   const resetFunc = () => {
//     const defaultValue = 0;
//     setCount(defaultValue);
//   };

//   return (
//     <div className={style.container}>
//       <div className={style.appCont}>
//         <h1>{count}</h1>
//         <div className={style.buttonCont}>
//           <button onClick={minus}>Decrease</button>
//           <button onClick={resetFunc}>Reset</button>
//           <button onClick={plus}>Increase</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// -----------------------Todo List -------------------------------

export default function MyTestedApps() {
  const [value, setValue] = useState("");
  const [lists, setList] = useState([]);
  const [selectedType, setSelectedType] = useState("ALL");

  const handleInputValue = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value === "") return;
    setList([...lists, { isCompleted: false, value: value }]);
    setValue("");
  };

  const handleChecked = (index) => {
    const newList = [...lists];
    newList[index].isCompleted = !newList[index].isCompleted;
    setList(newList);
  };

  const filteredList = lists.filter((item, index) => {
    if (selectedType === "ALL") return true;
    if (selectedType === "ACTIVE") return item.isCompleted == false;
    if (selectedType === "COMPLETED") return item.isCompleted == true;
  });

  const checkedList = filteredList.filter((item) => {
    if (item.isCompleted === false) return true;
  });
  console.log(lists);

  return (
    <div className={style.splitContainer}>
      <div className={style.container}>
        <h1>To-Do List</h1>
        <div className={style.todoCont}>
          <div className={style.top}>
            <input
              value={value}
              placeholder="Add a new task..."
              onChange={handleInputValue}
            />
            <button onClick={handleAdd}>Add</button>
          </div>

          <div className={style.buttons}>
            <button
              onClick={() => {
                setSelectedType("ALL");
              }}
            >
              All
            </button>
            <button
              onClick={() => {
                setSelectedType("ACTIVE");
              }}
            >
              Active
            </button>
            <button
              onClick={() => {
                setSelectedType("COMPLETED");
              }}
            >
              Completed
            </button>
          </div>

          {lists.map((list, index) => {
            return (
              <div className={style.listsContainer} key={index}>
                <div>
                  <input
                    type="checkbox"
                    checked={list.isCompleted}
                    onChange={() => {
                      handleChecked(index);
                    }}
                  />
                  {list.value}
                </div>

                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
