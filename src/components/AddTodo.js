import React from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";

import { addTodo } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (todo) => dispatch(addTodo(todo))
    }

}

const AddTodo = ({onSubmit}) => {
    let input;

    return (
        <div>
            <form onSubmit={ e=> {
                e.preventDefault();
                const id = uuid();
                if(input.value.trim()) {
                    onSubmit({
                        id,
                        text: input.value,
                        completed: "false"
                    });
                    input.value = '';
                }
            }}>
                <div>
                    <input type="text" placeholder="New Todo" ref={node => { input = node }} />
                </div>
                <div>
                    <input type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )

}


export default connect(null, mapDispatchToProps)(AddTodo)