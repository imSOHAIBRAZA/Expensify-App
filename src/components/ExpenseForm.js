import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';


class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calanderFocused: false,
            error: ''
        }
    };

    changeHandler = (e) => {
        let getValue = e.target.value;
        let getName = e.target.name
        if (getName === 'amount') {
            if (!getValue || getValue.match(/^\d{1,}(\.\d{0,2})?$/)) {
                this.setState(() => ({ [getName]: getValue }))
            }
        }
        else {
            this.setState(() => ({ [getName]: getValue }))
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({ createdAt })
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState({ calanderFocused: focused })
    };

    formHandeler = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })

        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.formHandeler} >
                    <input type="text" name='description' placeholder='Description' value={this.state.description} onChange={this.changeHandler} autoFocus />
                    <input type="text" name='amount' placeholder='Amount' value={this.state.amount} onChange={this.changeHandler} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calanderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea name='note' placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.changeHandler}></textarea>
                    <button type='submit'> Add Expense </button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;