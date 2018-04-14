import { combineReducers } from 'redux';
import expensesReducer from './expenses';
import filterReducer from './filters';
import authReducer from './auth';

export default combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
    auth: authReducer
});