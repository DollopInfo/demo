const initialState = {
  count: 10,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - (action.payload ?? 1),
      };
    default:
      return state;
  }
};
export default UserReducer;
