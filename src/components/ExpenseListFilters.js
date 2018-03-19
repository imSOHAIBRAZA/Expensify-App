import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { setTextFilter, sortByAmount, sortByDate,setStartDate,setEndDate } from '../store/actions/filters'
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export class ExpenseListFilters extends React.Component {
    state = {
        calanderFocused:null,
        uuid:uuid()
    }
    onTextChange = (e) => {
        const filter = e.target.value;
        this.props.setTextFilter(filter);
    };
    onSortChange = (e) => {
        const option = e.target.value;
        
        if (option === 'amount') {
            this.props.sortByAmount();
        }
        else if (option === 'date') {
            this.props.sortByDate();
        }
    };
    onDateChange=({ startDate, endDate })=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate)
    };
    onFocusChange=(calanderFocused)=>{
        this.setState(()=>({ calanderFocused }));
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.onTextChange} />
                <select onChange={this.onSortChange}>
                    <option value='date'> Date</option>
                    <option value='amount'> Amount</option>
                </select>
                {/* {console.log(this.props.setTextFilter)} */}
                <DateRangePicker
                    startDate={this.props.filters.startDate} 
                    startDateId={this.state.uuid}
                    endDate={this.props.filters.endDate}
                    endDateId={this.state.uuid}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calanderFocused} 
                    onFocusChange={this.onFocusChange} 
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps=(dispatch)=>({
setTextFilter:(text)=>dispatch(setTextFilter(text)),
sortByDate:()=>dispatch(sortByDate()),
sortByAmount:()=>dispatch(sortByAmount()),
setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
setEndDate:(endDate)=>dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);