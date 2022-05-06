import { ADD_TODO, TOGGLE_TODO } from "../constants/action-types";

const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

const todos = (state = storedTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        case TOGGLE_TODO:
            let modifiedTodos = state.map(todo => {
                if(todo.id === action.id) {
                    if (todo.completed === "false") {
                        todo.completed = "true";
                    } else {
                        todo.completed = "false";
                    }
                    return Object.assign({}, todo, { completed: todo.completed})
                }
                return todo;
            });
            localStorage.setItem('todos', JSON.stringify(modifiedTodos));
            return modifiedTodos;
        default:
            return state;
    } 
  
}
export default todos;