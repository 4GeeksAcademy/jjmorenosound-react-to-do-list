import React, { useState } from "react";
import { TaskInput } from "./taskinput";


export const Task = () => {
  const [values, setValues] = useState([]);
  const [inputValue, setInputValue] = useState([]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const addTask = () => {
    if (inputValue.trim() !== "") {
      setValues((previous) => [...previous, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };


  const removeTask = (indexToRemove) => {
    setValues((previous) => previous.filter((_, index) => index !== indexToRemove));
  };


  const toggleCompletion = (index) => {
    setValues((previous) =>
      previous.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 d-flex align-items-center">
            <TaskInput className="me-2" value={inputValue} onChange={handleInputChange} />
            <i onClick={addTask} className="fa fa-plus"></i>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-7 list-box">
            <ul>
              {values.map((item, index) => (
                <li key={index} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                  <div className="input-group mb-3 d-flex justify-content-between align-items-center">
                    <p>{item.text}</p>
                    <div>
                      <i onClick={() => toggleCompletion(index)} className="fa fa-check pe-1">
                        {item.completed ? "Undo" : ""}
                      </i>
                      <i onClick={() => removeTask(index)} className="fa fa-trash"></i>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
