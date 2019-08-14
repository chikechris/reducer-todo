import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/reducer";

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h2>{state.item}</h2>
    </div>
  );
};

export default Todos;
