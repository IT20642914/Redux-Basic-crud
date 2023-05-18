import { combineReducers } from "redux";

import bookReducer from "./bookReducer";
import userReducer from "./UserReducer";

const RootReducer = combineReducers({
  booksList: bookReducer,
  userList:userReducer
});
export default RootReducer;
