import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
        <h1>Expensify - Track your daily expenses</h1>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
};

//undefined is mapStateToProps()
export default connect(undefined, mapDispatchToProps)(LoginPage);