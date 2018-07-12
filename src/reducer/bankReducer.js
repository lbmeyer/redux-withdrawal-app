const initialState = {
  username: "Sally",
  totalAmount: 1000230
};

const bankReducer = (state = initialState, action) => {
  switch(action.type) {
    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - action.amount
      }

    default: 
      return state;
  }
}

export default bankReducer;