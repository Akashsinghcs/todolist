import { useState } from "react";

export default function Todolist() {
  const [currentTask, setCurrentTask] = useState();
  const [list, setList] = useState([]);
  let handleChange = (event) => {
    console.log(event);
    setCurrentTask(event.target.value);
  };

  let myFunction = (a) => {
    a.preventDefault();
    console.log(a);
    setList([...list, currentTask]);
    setCurrentTask();
  };
  return (
    <div>
      <form onSubmit={myFunction}>
        <label for="fname">Task:</label>
        <input value={currentTask} onChange={handleChange} />

        <input type="submit" value="Submit" />
      </form>
      <div>currentTask: {currentTask}</div>
      <div>
        {list.map((task) => {
          return <div>{task}</div>;
        })}
      </div>
    </div>
  );
}
