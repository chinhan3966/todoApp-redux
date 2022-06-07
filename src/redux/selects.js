import { createSelector } from "reselect";
const listTodo = (state) => state.todo;
const search = (state) => state.filter.search;
const status = (state) => state.filter.status;
const prioriry = (state) => state.filter.priorities;
// export const listTodo = (state) => {
//   const todoListFilter = state.todo.filter((todo) =>
//     todo.name.includes(state.filter.search)
//   );
//   return todoListFilter;
// };
// export const search = (state) => {
//   return state.filter.search;
// };

export const todoListFilter = createSelector(
  listTodo,
  search,
  status,
  prioriry,
  (todoList, search, status, prioriry) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return prioriry.length
          ? todo.name.includes(search) && prioriry.includes(todo.prioriry)
          : todo.name.includes(search);
      }
      return prioriry.length
        ? todo.name.includes(search) &&
            (status === "Completed" ? todo.completed : !todo.completed) &&
            prioriry.includes(todo.prioriry)
        : todo.name.includes(search) &&
            (status === "Completed" ? todo.completed : !todo.completed);
    });
  }
);
