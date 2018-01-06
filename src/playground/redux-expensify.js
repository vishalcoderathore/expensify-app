import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Demo State
const demoState = {
    expenses: [{
        id: 'testID',
        description : 'December Rent',
        note: 'This is the final rent for the year 2017',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
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
const removeExpense = ({id = 0} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense:{
        id
    }
});

//Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state= expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense] //Array Spread Operator
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => action.expense.id !== id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense, ...action.updates  //Object Spread Operator
                    };
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
};

//Text Filter
const setTextFilter = (text) => ({
    type: 'TEXT_FILTER',
    text
});

//Sort By Amount
const sortByAmount = (amount) => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

//Sort By Date
const sortByDate = (date) => ({
    type: 'SORT_BY_DATE',
    date
});

//Set Start Date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//Set End Date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state= filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
            return {...state, text: action.text} 
        case 'SORT_BY_AMOUNT':
        return {...state, sortBy: action.amount} 
        case 'SORT_BY_DATE':
        return {...state, sortBy: action.date} 
        case 'SET_START_DATE':
        return {...state, startDate: action.startDate} 
        case 'SET_END_DATE':
        return {...state, endDate: action.endDate} 
        default:
            return state;
    }
};

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

/************************************************************************************************ */
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
    });
};

//Get Visible Expenses
store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});
/************************************************************************************************ */


 const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, note: 'December Rent', createdAt:-5000}));
 const expenseTwo = store.dispatch(addExpense({description: 'Utilities', amount: 50, note: 'December Utilities', createdAt:1000}));

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }));

// store.dispatch(editExpense(
//     expenseTwo.expense.id,
//     {
//         amount: 500
//     }
// ));

// store.dispatch(setTextFilter('lit'));
store.dispatch(sortByAmount('amount'));
//store.dispatch(sortByDate('date'));
// store.dispatch(setStartDate(125));  //startDate 125
// store.dispatch(setStartDate());    //start Date undefined
// store.dispatch(setEndDate(1234)); //endDate 1250





