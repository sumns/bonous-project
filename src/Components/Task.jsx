import React, { useState } from "react";
function Task() {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [update, setUpdate] = useState("");
  function Addtask() {
    setTodo([...todo, data]);
    setData("");
  }
  function DeleteTask(idx) {
    setTodo((preTask) => preTask.filter((item, i) => i !== idx));
  }
  const handleUpdate = () => {
    if (update.trim() !== "") {
      setTodo((prevTasks) => {
        const updatedTask = [...prevTasks];
        updatedTask[editTask] = update;
        return updatedTask;
      });
      setEditTask(null);
      setUpdate("");
    }
  };
  function handleEdit(idx) {
    setEditTask(idx);
    setUpdate(todo[idx]);
  }
  return (
    <div className="task">
      <div className="taskContainer">
        <h1>Task page</h1>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={Addtask}>Add task</button>
        <ul>
          {todo.map((item, idx) => (
            <li key={idx}>
              {editTask === idx ? (
                <div>
                  <input
                    type="text"
                    value={update}
                    onChange={(e) => setUpdate(e.target.value)}
                  />
                  <button onClick={handleUpdate}>Update</button>
                </div>
              ) : (
                <div>
                  {item}
                  <button onClick={() => handleEdit(idx)}>Edit</button>
                  <button onClick={() => DeleteTask(idx)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Task;
