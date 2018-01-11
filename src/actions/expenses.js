import uuid from 'uuid';
import database from '../firebase/firebase';

// User Profile Data
let userName, userEmail, userEmailVerified, authUid;
export const userData = (displayName, email, emailVerified, uid) => {
    userName = displayName;
    userEmail = email;
    userEmailVerified = emailVerified;
    authUid = uid;
};

//Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        
        const expense = { amount, createdAt, description, note };
        database.ref(`users/${uid}/profileInfo`).set({
            name: userName ? userName : "",
            email: userEmail ? userEmail : "",
            emailCertified: userEmailVerified ? userEmailVerified : "",
            uid: authUid ? authUid : ""
        });
        
        return database.ref(`users/${uid}/expenses`).push(expense).then(
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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/expenses`).once('value').then(
            (snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                if(expenses.length < 1){
                    database.ref(`users/${uid}/profileInfo`).remove();
                }
            }
        );
    
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(
            () => {
                dispatch(removeExpense({ id }));
            }
        );
    };
};

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(
            () => {
                dispatch(editExpense(id, updates));
            }
        );
    };

};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then(
            (snapshot) => {
                const expenses = [];

                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setExpenses(expenses));
            }
        );
    };
};