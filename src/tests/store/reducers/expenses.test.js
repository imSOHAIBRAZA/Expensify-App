import expensesReducer from '../../../store/reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
});

test('should add expenses ',()=>{
    const action = {
        type:'ADD_EXPENSE',
         expense: {
            id: '5',
            description: 'Car',
            note: '',
            amount: 195,
            createdAt: 0
        }  
    }
 const state = expensesReducer(expenses,action);
 expect(state).toEqual([...state]);
});


test('should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...state]);
});


test('should remove expense if id not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...state]);
})

test('should edit expense',()=>{
    const amount=1200;
    const action ={
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);
})

test('should edit expense if id not found',()=>{
    const amount=1200;
    const action ={
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})