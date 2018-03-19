import moment from 'moment';

// Filter Reducer 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                // sortBy: 'amount'
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                // sortBy: 'date'
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

export default filterReducer;