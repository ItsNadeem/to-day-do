import React from "react";
import { connect } from "react-redux";


import Todo from './Todo';


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
            <div> 
                {
                    todos.map(todo => <Todo
                    key={todo.id}
                    {...todo}
                    />)
                }
                    
            </div>
            
        </div>
    );
}

export default connect(mapStateToProps)(TodoList);