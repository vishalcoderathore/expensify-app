import filtersReducer from '../../reducers/filtersReducer';
import moment from 'moment';
import {filters} from '../fixtures/dummyExpenses';



// Set Text Filter Test Case
test('should set up text filter', () => {
    const action = {
        type: 'TEXT_FILTER',
        text: 'abc'
    };
    const reducer = filtersReducer(filters, action);
    expect(reducer).toEqual({
        ...filters,
        text: 'abc'
    });
});

// Set Amount Filter Test Case
test('should set up amount filter', () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    };
    const reducer = filtersReducer(filters, action);
    expect(reducer).toEqual({
        ...filters,
        sortBy: 'amount'
    });
});

// Set Date Filter Test Case
test('should set up date filter', () => {
    const action = {
        type: 'SORT_BY_DATE'
    };
    const reducer = filtersReducer(filters, action);
    expect(reducer).toEqual({
        ...filters,
        sortBy: 'date'
    });
});

// Set Start Date Filter Test Case
test('should set up start date filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    };
    const reducer = filtersReducer(filters, action);
    expect(reducer).toEqual({
        ...filters,
        startDate: moment(0)
    });
});

// Set End Date Filter Test Case
test('should set up end date filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    };
    const reducer = filtersReducer(filters, action);
    expect(reducer).toEqual({
        ...filters,
        endDate: moment(0)
    });
});

// Default Filter Test Case
test('should set up default filter', () => {
    const action ={
        type: ''
    };
    const reducer = filtersReducer(filters, action);
    expect(reducer).toEqual({
        ...filters
    });
});