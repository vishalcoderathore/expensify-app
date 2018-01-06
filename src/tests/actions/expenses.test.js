import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import uuid from 'uuid';

// Remove Expense Test Case
test('should set up remove expense' , () => {
    const removeAction = removeExpense({id: '123ab'});

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
        updates:{
            ...editData
        }
    });
});

// Add Expense with provided Values Test Case
test('should set up add expense with provided values', () => {
    const addData = {
        note: 'This is a test note',
        description: 'This is a test description',
        amount: 12345,
        createdAt: 12345
    };
    
    const addAction = addExpense(addData);

    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...addData,
            id: expect.any(String)
        }
    });
});


// Add Expense with no provded Test Case
test('should set up add expense with default values', () => {
    const addData = {
        note: '',
        description: '',
        amount: 0,
        createdAt: 0
    };
    
    const addAction = addExpense();

    expect(addAction).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...addData,
            id: expect.any(String)
        }
    });
});