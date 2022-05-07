import { configureStore } from "@reduxjs/toolkit";
import todos from './todos';
import filter from "./filter";

const store = configureStore({
    reducer: {
      todos: todos,
      filter: filter
    }
  })
  
  export default store