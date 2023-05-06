const initialState = {
  count: 255,
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
export default AdminReducer;
