import uuid from 'uuid';

//Add Expense
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        createdAt,
        amount
    }
});

//Remove Expense
export const removeExpense = ({id = 0} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense:{
        id
    }
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});