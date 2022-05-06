import React from "react";
import { connect } from "react-redux";




// Get todo from states
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const TodoList = ({todos}) => {

    let message;
    if(todos.length === 0) {
        message = (<div> No items to work on. Great, go explore !!! </div>)
    }

    return (
        <div>
            {message}
            {todos.map(todo => <p key={todo.id}>{todo.text}</p> )}
        </div>
    );
}

export default connect(mapStateToProps)(TodoList);