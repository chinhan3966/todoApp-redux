const initialState = [
  { id: 1, name: "Learn React", prioriry: "High", completed: false },
  { id: 2, name: "Learn Redux", prioriry: "Medium", completed: true },
  { id: 1, name: "Learn Javascript", prioriry: "Low", completed: false },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return [...state, action.payload];
    case "todo/handleChangeCompleted":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
