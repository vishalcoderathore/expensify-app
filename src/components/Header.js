import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
    <div>
        <h1>Expensify</h1>
        <h2>Testing new testing library</h2>
        <NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink><br />
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br />
        <NavLink to="/help" activeClassName="is-active">Help Desk</NavLink><br /><br />
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
};

export default connect(undefined, mapDispatchToProps)(Header); 