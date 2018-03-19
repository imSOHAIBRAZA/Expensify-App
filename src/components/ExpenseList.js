import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../store/selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        {props.expenses.length === 0 ? (
            <p>No Expenses </p>
        ) : (
                props.expenses.map((expense) => {
                    console.log(expense.id)
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )}

    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);