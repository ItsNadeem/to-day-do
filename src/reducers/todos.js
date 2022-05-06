import { ADD_TODO } from "../constants/action-types";

const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = storedTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        default:
            return state;
    } 
  
}
export default todos;