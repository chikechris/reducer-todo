export const initialState = {
  todos: [
    {
      item: "I need to go to movies",
      completed: false,
      id: 10
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(item => !item.completed)
      };
    default:
      return state;
  }
};
