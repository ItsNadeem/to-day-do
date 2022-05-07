import React from "react";
import { connect } from "react-redux";
import { clearTodos, setFilter } from "../actions";
import { FILTER_COMPLETED, FILTER_ALL, FILTER_ACTIVE } from '../constants/filter-types';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (e) => dispatch(setFilter(e.target.value)),
        onClickClear: (e) => dispatch(clearTodos())
    }
}

const Filter = ({filter, onChangeFilter, onClickClear}) => {
    return (
        <div>
            <div>
                <button onClick={onClickClear}>Clear</button>
            </div>
            <div>
                <span>Show:</span>
                <select onChange={onChangeFilter} value={filter}>
                    <option value={FILTER_ALL}> All </option>
                    <option value={FILTER_ACTIVE}> To Do </option>
                    <option value={FILTER_COMPLETED}> Completed </option>
                </select>
            </div>
        </div>
    );
}


export default connect(null, mapDispatchToProps)(Filter)