import React from 'react'
import "./TodoList.css"

const TodoList = () => {
  return (
    <div className="body">
    <div className="main-container">
      <h1>ToDo List</h1>
      <div className="todo-list">
        <div className="todo-item">
          <input type="checkbox" id="task1" />
          <label htmlFor="task1">Learn React</label>
        </div>
        <div className="todo-item">
          <input type="checkbox" id="task2" />
          <label htmlFor="task2">Build a Todo App</label>
        </div>
          <div className="todo-work">
          <input type="checkbox" id="task3" />
          <label htmlFor="task3">Using Java Script</label>
        </div>
      </div>
  
  
    </div>
    </div>
  );
};

export default TodoList;