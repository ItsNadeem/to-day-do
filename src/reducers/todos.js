import { ADD_TODO } from "../constants/action-types";

const storedTodos = [
    {
        "id":10000,
        "text" : "Mock 1"
    }, 
    {
        "id":20000,
        "text" : "Mock 2"
    }
];



const todos = (state = storedTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        default:
            return state;
    } 
  
}
export default todos;