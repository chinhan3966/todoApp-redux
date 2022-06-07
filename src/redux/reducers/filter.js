const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filter/changeSearch":
      return {
        ...state,
        search: action.payload,
      };
    case "filter/changeStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/handleChangePriority":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
