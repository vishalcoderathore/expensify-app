import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1>Expensify</h1>
            <p>Track your daily expenses at one place</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
};

//undefined is mapStateToProps()
export default connect(undefined, mapDispatchToProps)(LoginPage);