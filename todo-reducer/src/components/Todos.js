import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducer";

const ToDos = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleChanges = event => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  };

  return (
    <div>
      <h1>Add To Do</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button>Add item</button>
        </form>
        <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
          Clear completed
        </button>
      </div>

      {state.todos.map(item => (
        <div className={`to-do${item.completed ? " completed" : ""}`}>
          <h3>{item.item}</h3>
          <button
            className="complete-btn"
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: item.id })}
          >
            Mark complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDos;
