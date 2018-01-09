import configureMockStore from 'redux-mock-store';
import { expenses } from '../fixtures/dummyExpenses';
import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import database from '../../firebase/firebase';
import uuid from 'uuid';
import thunk from 'redux-thunk';

// Create configuration for Mock Store
const createMockStore = configureMockStore([thunk]);

// Remove Expense Test Case
test('should set up remove expense', () => {
    const removeAction = removeExpense({ id: '123ab' });

    expect(removeAction).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123ab'
        }
    });
});

// Edit Expense Test Case
test('should set up edit expense', () => {
    const editData = {
        note: 'This is a test note',
        description: 'This is a test description',
        amount: 12345,
        createdAt: 12345
    }

    const editAction = editExpense('123ab', editData);

    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123ab',
        updates: {
            ...editData
        }
    });
});

// Add Expense with provided Values Test Case
test('should set up add expense with provided values', () => {
    const addData = expenses[2];
    const addAction = addExpense(addData);

    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...addData
        }
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Rent',
        amount: 500,
        note: '',
        createdAt: 0
    };

    // Assertion for correct data to be persisted
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        // Assertion to get the persisted data (promise chaining)
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(
        (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        },
        (e) => { console.log(e); }
        );
});

test('should add expense with defaults to database and store', (done) => { 
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    // Assertion for correct data to be persisted
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        // Assertion to get the persisted data (promise chaining)
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(
        (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        },
        (e) => { console.log(e); }
        );
});

// Add Expense with no provded Test Case
// test('should set up add expense with default values', () => {
//     const addData = {
//         note: '',
//         description: '',
//         amount: 0,
//         createdAt: 0
//     };

//     const addAction = addExpense();

//     expect(addAction).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             ...addData
//         }
//     });
// });