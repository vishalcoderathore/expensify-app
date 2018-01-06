import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//Create Store
const store = configureStore();
console.log('test');
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
