import { legacy_createStore } from "redux";
let pi = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      // console.log(action);
      return [...state, { ...action.data, id: pi++ }];
    case "delete":
      return state.filter((ele) => {
        return ele.id !== action.payload.id;
      });
    case "update":
      return state.map((ele) => {
        if (ele.id === action.data.id) {
          return action.data;
        }
        return ele;
      });
    default:
      return state;
  }
};

const store = legacy_createStore(reducer, []);

export default store;
