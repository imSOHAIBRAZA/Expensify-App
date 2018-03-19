import {combineReducers} from 'redux';
import expensesReducer from './expenses';
import filterReducer from './filters';

export default combineReducers ({
    expenses: expensesReducer,
    filters: filterReducer
});