import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlices";
import crudReducer from "./slices/crudSlices";

export default configureStore({
  reducer: { counterReducer, crudReducer },
});
