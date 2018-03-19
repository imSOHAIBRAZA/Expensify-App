import filterReducer from '../../../store/reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, '@@INIT')
    expect(state).toEqual({
        text: '',
        sortBy: 'date', //date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should setup sortBy to amount ', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy = 'amount').toBe('amount');
});

test('should set sortBy to date ', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'

    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducer(currentState, action);
    expect(state.sortBy = 'date').toBe('date');
});

test('should set text filter', () => {
    const text = "this is my filter";
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const date = moment(0);
    const action = {
        type: 'SET_START_DATE',
        startDate :date
    }
    const state = filterReducer(undefined,action );
    expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
    const date = moment(0);
    const action = {
        type: 'SET_END_DATE',
        endDate :date
    }
    const state = filterReducer(undefined,action );
    expect(state.endDate).toBe(date);
});