import {
    addExpense,
    removeExpense,
    editExpense
} from '../../../store/actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 1 });
    const result = { type: 'REMOVE_EXPENSE', id: 1 }
    expect(action).toEqual(result)
});

test('should setup edit expense action object', () => {
    const action = editExpense(1, 'Sohaib');
    const result = { type: 'EDIT_EXPENSE', id: 1, updates: 'Sohaib' }
    expect(action).toEqual(result)
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        note: 'car rent',
        amount: 45,
        createdAt: 1200
    }
    const action = addExpense(expenseData);
    const result = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    }
    expect(action).toEqual(result);
});

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();
    const result = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    }
    expect(action).toEqual(result);
});

