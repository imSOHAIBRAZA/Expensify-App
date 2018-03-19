import getVisiableExpenses from '../../../store/selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisiableExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});



test('should filter sort by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisiableExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter sort by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = getVisiableExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should short by date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisiableExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('should short by amount',()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisiableExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})