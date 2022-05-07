import { ADD_TODO, CLEAR_TODOS, SET_FILTER, TOGGLE_TODO } from "../constants/action-types";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const clearTodos = () => ({
    type: CLEAR_TODOS
})

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})