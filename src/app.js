import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import store from './store';
import { Provider } from 'react-redux';
import { addExpense } from './store/actions/expenses';
import {setTextFilter} from './store/actions/filters';
import getVisiableExpenses from './store/selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


// store.subscribe(() => {
//     console.log(store.getState())
// });


// store.dispatch(addExpense({ description: 'Water Bill', amount:4500 }));
// store.dispatch(addExpense({ description: 'Rent',createdAt:20000 }));
// store.dispatch(addExpense({ description: 'Gas Bill',amount:300 }));

// store.dispatch(setTextFilter('water'));

// const state = store.getState();
// const visiableExpenses = getVisiableExpenses(state.expenses,state.filters)
// console.log(visiableExpenses);



ReactDOM.render(<App />, document.getElementById('app'));
