import { configureStore } from "@reduxjs/toolkit";
import todos from './todos'

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todos Reducer`
      todos: todos
    }
  })
  
  export default store