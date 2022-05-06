import React from "react";
import { connect } from "react-redux";




// Get todo from states
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map(todo => <p key={todo.id}>{todo.text}</p> )}
        </div>
    );
}

export default connect(mapStateToProps)(TodoList);