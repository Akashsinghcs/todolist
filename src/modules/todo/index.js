import React, { useState } from "react";
import "./style.css";

export default function Todolist() {
  const savedList = JSON.parse(localStorage.getItem("ak")) || [];
  const [currentTask, setCurrentTask] = useState();
  const [list, setList] = useState(savedList);

  let handleChange = (event) => {
    setCurrentTask(event.target.value);
  };

  /**
   * My Function is arrow function, takes event as paramter.
   * Inserts current task in list, and clears current task to empty string
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    /// list = [1, 2, 3], currentTask = 4
    //  [1, 2, 3, 4]
    // list.push(4)
    const updatedList = [...list, currentTask];
    setList(updatedList);
    setCurrentTask("");
    localStorage.setItem("ak", JSON.stringify(updatedList));
  };

  const handleDelete = (task) => {
    const updatedList = list.filter((value) => value !== task);
    setList(updatedList);
    localStorage.setItem("ak", JSON.stringify(updatedList));
  };

  return (
    <div>
      <h3>To Do List</h3>
      <form className="Head" onSubmit={handleSubmit}>
        <label for="fname">Task</label>
        <input className="inputBox" value={currentTask} onChange={handleChange} placeholder="   Enter your task" />
        <input type="submit" value="submit" />
      </form>
      {list.length !== 0 && (
        <div className="list">
          <ol>
            {list.map((task, index) => {
              return (
                <li key={index}>
                  <span>{task}</span>
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={() => {
                      handleDelete(task);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
