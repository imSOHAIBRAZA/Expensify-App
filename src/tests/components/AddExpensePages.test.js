import React from 'react';
import { AddExpensePage } from '../../components/AddExpensePage';
// import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import expenses from '../store/fixtures/expenses';

// let addExpense, history, wrapper;
// beforeEach(() => {
//     const addExpense = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
// });


test('should render Add Expense correctly', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})