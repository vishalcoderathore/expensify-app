import React from 'react';

class ErrorPopup extends React.Component{
    render(){
        return(
            <div className="form__error">
                <p>Please enter Description and Amount</p>
            </div>
        )
    }
}

export default ErrorPopup;