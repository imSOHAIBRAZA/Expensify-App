import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({...expense } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        ...expense
    }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
});