import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({description, amount, createdAt, note, dispatch, id}) => (
    <div>
        
        <Link to={`/edit/${id}`}>
            <h3>Description: {description}</h3>
        </Link>
        <p>
            Amount: {numeral(amount).format('$0,0.00')}
            -
            Date: {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
        <i>Note: {note ? note : 'N/A'}</i>
       
    </div>
        
);
export default ExpenseListItem;

