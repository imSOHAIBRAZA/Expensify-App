import moment from 'moment';
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from '../../../store/actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    const result = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    expect(action).toEqual(result);
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    const result = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }
    expect(action).toEqual(result);
})

test('should generate set Text filter with value action object', () => {
    const action = setTextFilter('something in');
    const result = {
        type: 'SET_TEXT_FILTER',
        text: 'something in'
    }
    expect(action).toEqual(result);
});

test('should generate set Text filter with default value action object', () => {
    const action = setTextFilter();
    const result = {
        type: 'SET_TEXT_FILTER',
        text: ''
    }
    expect(action).toEqual(result);
});

test('should generate sort by date action object',()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE', sortBy:'date'})
});

test('should generate sort by amount action object',()=>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT', sortBy:'amount'})
})

