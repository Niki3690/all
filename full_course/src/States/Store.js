import { configureStore } from "@reduxjs/toolkit"
import incdecReducer from "./../../src/Reducers/Index"

export default configureStore({
  reducer:{
    number:incdecReducer,              
  }
})
