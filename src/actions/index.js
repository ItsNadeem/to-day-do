import { ADD_TODO } from "../constants/action-types";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});