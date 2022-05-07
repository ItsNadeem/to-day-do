import React from "react";
import { connect } from "react-redux";


import Todo from './Todo';
import Filter from "./Filter";
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from "../constants/filter-types";


// Filter todos based on selected filter
const filteredTodos = (todos, filter) => {
    switch(filter) {
        case FILTER_ALL:
            return todos;
        case FILTER_COMPLETED:
            return todos.filter(todo => todo.completed);
        case FILTER_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

// Get todos from state
const mapStateToProps = (state) => {
    return {
        todos: filteredTodos(state.todos, state.filter),
        filter: state.filter
    }
}

const TodoList = ({todos, filter}) => {

    let message;
    if(todos.length === 0) {

        let text;
        switch(filter) {
            case FILTER_COMPLETED: text = 'Nothing completed yet.'; break;
            case FILTER_ACTIVE: text = 'Nothing to be completed.'; break;
            default: text = 'No items to work on. Great, add new items!!!'; break;
        }
        message = (<div> {text} </div>)
    }

    return (
        <div>
            {message}
            <div> 
                {
                    todos.map(todo => <Todo
                    key={todo.id}
                    {...todo}
                    />)
                }    
            </div>
            <Filter filter={filter} />
            
        </div>
    );
}

export default connect(mapStateToProps)(TodoList);