import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, note, dispatch, id}) => (
    <div>
        
        <Link to={`/edit/${id}`}><h1>Description: {description}</h1></Link>
        <p>Amount: {amount} ,Created on: {createdAt}</p>
        <p>Expense Note: {note}</p>
       
    </div>
        
);
export default ExpenseListItem;

