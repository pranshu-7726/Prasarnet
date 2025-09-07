
import React from 'react';
import "./TodoFrom.css";

const TodoForm = () => {
  return (
    <div className="body">
      <div className="main-container">
        <h1>ToDo From</h1>
        <div className="todo-list">
          <div className="todo-item">
            <input type="checkbox" id="task1" />
            <label htmlFor="task1">Learn React</label>
          </div>
          <div className="todo-item">
            <input type="checkbox" id="task2" />
            <label htmlFor="task2">Build a Todo App</label>
          </div>
          <div className="todo-item">
            <input type="checkbox" id="task3" />
            <label htmlFor="task3">Using JavaScript</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;