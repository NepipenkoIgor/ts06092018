import { AnyAction } from 'redux';
import { SEARCH_BY_TERM } from '../actions/search-term.action';

const initalState = '';

export const searchTermReducer = (state = initalState, action: AnyAction): string => {
    switch (action.type) {
        case SEARCH_BY_TERM:
            return action.payload;
        default:
           return state;
    }
};

