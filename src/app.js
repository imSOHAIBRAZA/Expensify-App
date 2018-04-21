import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';
import store from './store';
import { Provider } from 'react-redux';
import { startSetExpenses } from './store/actions/expenses';
import { setTextFilter } from './store/actions/filters';
import { login, logout } from './store/actions/auth';
import getVisiableExpenses from './store/selectors/expenses';
import './styles/style.scss';
import { firebase } from './firebase/firebase';
import LodingPage from './components/LodingPage';
// import './playground/promises';

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRender = false;
const renderApp = () => {
    if (!hasRender) {
        ReactDOM.render(<App />, document.getElementById('app'));
        hasRender = true;
    }
};


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

ReactDOM.render(<LodingPage/>, document.getElementById('app'));



// **** User Login Authantication **** //
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // **** Show Expenses when user Login**** //
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashbord');
            }
        });
    }
    else {
        // **** Logout Redirect **** //
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
