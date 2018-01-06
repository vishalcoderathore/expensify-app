//Higher Order Components - A component that renders another component
//Resue code
//Render hijacking
//Props Manipulation
//Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>  
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ?  <WrappedComponent /> : <p>Login Required!</p>}
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details'/>, document.getElementById('app'));