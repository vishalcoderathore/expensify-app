import moment from 'moment';
import getVisibleExpenses from '../../selectors/visibleExpenses';
import {expenses} from '../fixtures/dummyExpenses';


// Text Value Filter Test Case
test('should filter by text value', () => {
    const filters = {
        text: 'Gro',
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    }
    const getExpenses = getVisibleExpenses(expenses, filters);
    expect(getExpenses).toEqual([expenses[1]]);
});

// Start Date Filter Test Case
test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date', 
        startDate: moment(0),
        endDate: undefined
    }
    const getExpenses = getVisibleExpenses(expenses, filters);
    expect(getExpenses).toEqual([expenses[2], expenses[0]]);
});

// End Date Filter Test Case
test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date', 
        startDate: undefined,
        endDate: moment(0).subtract(1, 'days')
    }
    const getExpenses = getVisibleExpenses(expenses, filters);
    expect(getExpenses).toEqual([expenses[1]]);
});

// Date Sort Test Case
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    }
    const getExpenses = getVisibleExpenses(expenses, filters);
    expect(getExpenses).toEqual([expenses[2],expenses[0],expenses[1]]);
});

// Amount Sort Test Case
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount', 
        startDate: undefined,
        endDate: undefined
    }
    const getExpenses = getVisibleExpenses(expenses, filters);
    expect(getExpenses).toEqual([expenses[0],expenses[1],expenses[2]]);
});