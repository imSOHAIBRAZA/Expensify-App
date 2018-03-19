import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashbordPage from '../components/ExpenseDashbordPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';


const history = createHistory();

const AppRouter = () =>  (
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={ExpenseDashbordPage} exact={true} />
                    <Route path='/create' component={AddExpensePage} />
                    <Route path='/edit/:id' component={EditExpensePage} />
                    <Route path='/help' component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>

        </Router>
    );


export default AppRouter;