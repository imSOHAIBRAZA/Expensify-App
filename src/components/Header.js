import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../store/actions/auth';
import { connect } from 'react-redux';


const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashbord" activeClassName="is-active">Dashbord </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
        {/* <NavLink to="/help" activeClassName="is-active">Help </NavLink> */}
        <button onClick={startLogout}> Logout </button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);