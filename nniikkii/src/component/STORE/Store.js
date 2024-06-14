import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CatSlice";

let Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default Store;
