import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// ** ACTION GENERATOR **/
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    enpense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
}
);

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
}
);

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
}

);
// SET_TEXT_FILTER
const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text: text
    }
);

// SORT_BY_AMOUNT
const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'

    }
);

// SORT_BY_DATE
const sortByDate = () => (
    {
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    }
);

// SET_START_DATE
const setStartDate = (startDate) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
);
// SET_END_DATE
const setEndDate = (endDate) => (
    {
        type: 'SET_END_DATE',
        endDate
    }
)


// **REDUCER** //

//Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.enpense];
        case 'REMOVE_EXPENSE':
            return state.filter(
                ({ id }) => (id !== action.id)
            )
        case 'EDIT_EXPENSE':
            return state.map(
                (expense) => {
                    if (expense.id === action.id) {
                        return { ...expense, ...action.updates }
                    }
                    else {
                        return expense;
                    }
                }
            );
        default:
            return state;
    }

};

// Filter Reducer 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
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
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
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

// GET VISIABLE EXPENSIVE
const getVisiableExpenses = (expense, { text, sortBy, startDate, endDate }) => {
    return expense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch & endDateMatch & textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }

    });
}

// **STORE** //

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visiableExpenses = getVisiableExpenses(state.expenses, state.filter);
    console.log(visiableExpenses);
});

//** ACTION CALL  *//

// store.subscribe(() => {
//     console.log(store.getState())
// });


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 89, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 5699, createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expenseOne.enpense.id }));
// store.dispatch(editExpense(expenseTwo.enpense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(190));





// DEMO STORE //
const demoStore = {
    expenses: [{
        id: '3d66rh',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: '3400',
        createdAt: '0'
    }],
    filter: {
        text: '',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
