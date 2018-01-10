import expenseReducer from '../../reducers/expensesReducer';
import {expenses} from '../fixtures/dummyExpenses';

// Set Default State
test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

// Remove Expense when id found Test Case
test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense : {
            id: '2'
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

// Remove Expense when id not found Test Case
test('should remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense : {
            id: '5'
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

// Add Expense Test Case
test('should add expense ', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense : {
            id: '3',
            description: 'New Add',
            amount: 500,
            note: '',
            createdAt: 0
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

// Edit existing Expense Test Case
test('should edit existing expense ', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates : {
            description: 'Edited Desc',
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state[0].description).toBe('Edited Desc');
});

// Edit non-existing Expense Test Case
test('should not edit non-existing expense ', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '7',
        updates : {
            description: 'Edited Desc',
        }
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
