import { combineReducers } from 'redux';
import { searchTermReducer } from './search-term.reducer';
import { usersReducer } from './users.reducer';

export const rootReducer = combineReducers({
    searchTerm: searchTermReducer,
    users: usersReducer
});