import React from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../actions"; 



const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => dispatch(toggleTodo(id))
    }
}


const Todo = ({id, text, completed, onItemClick}) => {
    return (
        <div key={id} onClick={e => onItemClick(id)}>
            {text}
        </div>
    )
}


export default connect(null, mapDispatchToProps)(Todo);