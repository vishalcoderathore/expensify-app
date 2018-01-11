import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ?
            (<div>
                <Header />
                <Component {...props} />
            </div>) : (<Redirect to="/" />)
    )} />
);

/* Re-formatted
export const PrivateRoute = (props1) => {
    console.log('props1', props1);
    const Component = props1.component;
    return (
        <Route
            component={(props2) => {
                console.log('props2', props2);
                return props1.isAuthenticated ?
                    <div>
                        <Header />
                        <Component {...props2} />
                    </div> : <Redirect to="/" />;
            }} />
    );
};
*/


const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    };
};

export default connect(mapStateToProps)(PrivateRoute);