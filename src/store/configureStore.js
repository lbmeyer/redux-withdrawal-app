import { createStore } from 'redux';
import bankReducer from '../reducer/bankReducer';

// const initialState = {
//   username: "Sally",
//   totalAmount: 1000230
// };

// const store = createStore(bankReducer, initialState);
const store = createStore(bankReducer);
export default store;