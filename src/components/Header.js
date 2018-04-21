import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../store/actions/auth';
import { connect } from 'react-redux';


const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashbord">
                    <h1>Expensify</h1>
                </Link>
                {/* <NavLink to="/help" activeClassName="is-active">Help </NavLink> */}
                <button className="button button--link" onClick={startLogout}> Logout </button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);