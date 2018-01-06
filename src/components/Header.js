import React from 'react';
import {  NavLink } from 'react-router-dom';


const Header = () => (
    <div>
        <h1>Expensify</h1>
        <h2>Testing new testing library</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help Desk</NavLink><br/><br/>
    </div>
);

export default Header;