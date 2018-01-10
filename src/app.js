import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
//import './playground/promises';

//Create Store
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading.....</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(
    () => {
        ReactDOM.render(jsx, document.getElementById('app'));
    }
);

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('log in');
    }else{
        console.log('log out');
    }
});