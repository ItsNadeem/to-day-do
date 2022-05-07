import { FILTER_ALL } from "../constants/filter-types";
import { SET_FILTER } from '../constants/action-types';

const storedFilter = localStorage.getItem('filter') || FILTER_ALL;


const filter = (state = storedFilter, action) => {
    switch(action.type) {
        case SET_FILTER:
            localStorage.setItem('filter', action.filter);
            return action.filter;
        default:
           return state;
    }
}

export default filter;