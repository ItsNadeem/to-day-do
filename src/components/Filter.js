import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { clearTodos, setFilter } from "../actions";
import { FILTER_COMPLETED, FILTER_ALL, FILTER_ACTIVE } from '../constants/filter-types';

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFilter: (e) => dispatch(setFilter(e.target.value)),
        onClickClear: (e) => dispatch(clearTodos())
    }
}

const Dropdown = styled.div`
    margin: 3em 0 0 0;
`;

const Filter = ({todosLength, filter, onChangeFilter, onClickClear}) => {
    return (
        <Dropdown className="row flex-edges">
            <div>
                <button className="btn-small"  style={todosLength ? {} : {display: 'none'}} onClick={onClickClear}>Clear</button>
            </div>
            <div className="col padding-small">
                <div className="row flex-right margin-none">
                    <span className="padding-right-small">Show:</span>
                    <select onChange={onChangeFilter} value={filter}>
                        <option value={FILTER_ALL}> All </option>
                        <option value={FILTER_ACTIVE}> To Do </option>
                        <option value={FILTER_COMPLETED}> Completed </option>
                    </select>
                </div>
            </div>
           
        </Dropdown>
    );
}


export default connect(null, mapDispatchToProps)(Filter)