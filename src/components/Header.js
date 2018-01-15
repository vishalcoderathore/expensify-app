import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title">
                    <img src="/images/expensify-logo.png" />
                </Link>
                <button onClick={startLogout} className="header__button">Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
};

export default connect(undefined, mapDispatchToProps)(Header); 