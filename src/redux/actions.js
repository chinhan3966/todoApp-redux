export const addTodo = (data) => ({ type: "todo/addTodo", payload: data });
export const changeSearchFilter = (text) => ({
  type: "filter/changeSearch",
  payload: text,
});
export const changeStatusFilter = (text) => ({
  type: "filter/changeStatus",
  payload: text,
});
export const handleChangePriorityFilter = (value) => ({
  type: "filter/handleChangePriority",
  payload: value,
});

export const handleChangeCompletedTodo = (id) => ({
  type: "todo/handleChangeCompleted",
  payload: id,
});
