import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//Create Store
const store = configureStore();

//Add Expenses
const expenseOne = store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 100,
    note: 'Water Bill',
    createdAt:5000
}));
const expenseTwo = store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 50,
    note: 'Gas Bill',
    createdAt:1000
}));

//Get Visible Expenses
const state = store.getState();
console.log('Displaying from Subscribe Block');
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
