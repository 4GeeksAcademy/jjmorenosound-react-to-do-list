import React, { useState } from "react";
import { TaskInput } from "./taskinput";


export const Task = () => {
  const [values, setValues] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setValues((previous) => [...previous, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (indexToRemove) => {
    setValues((previous) => previous.filter((_, index) => index !== indexToRemove));
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
                <li key={index}>
                  <div className="input-group mb-3 d-flex justify-content-between align-items-center">
                    <p>{item}</p>
                    <i onClick={() => removeTask(index)} className="fa fa-trash"></i>
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