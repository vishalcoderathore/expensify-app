import uuid from 'uuid';
import database from '../firebase/firebase';

//Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { amount, createdAt, description, note };
        return database.ref('expenses').push(expense).then(
            (ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            }
        );
    };
};

//Remove Expense
export const removeExpense = ({ id = 0 } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});