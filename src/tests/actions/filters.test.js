import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

// Text Filter of provided values Test Case
test('should set up text filter of provided text', () => {
    const filteredText = 'abc';
    const text = setTextFilter(filteredText);

    expect(text).toEqual({
        type: 'TEXT_FILTER',
        text: filteredText
    });
});

// Text Filter of default values Test Case
test('should set up text filter of default text', () => {
    const text = setTextFilter();

    expect(text).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});

// Date Sort Test Case
test('should set up date sort', () => {
    const dateSort = sortByDate();

    expect(dateSort).toEqual({
        type: 'SORT_BY_DATE'
    });
});

// Amount Sort Test Case
test('should set up amount sort', () => {
    const amountSort = sortByAmount();

    expect(amountSort).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

// Start Date filter Test Case
test('should set up start date', () => {
    const date = moment(0);
    const startDate = setStartDate(date);

    expect(startDate).toEqual({
        type: 'SET_START_DATE',
        startDate : moment(0)
    });
});

// End Date filter Test Case
test('should set up end date', () => {
    const date = moment(0);
    const endDate = setEndDate(date);

    expect(endDate).toEqual({
        type: 'SET_END_DATE',
        endDate : moment(0)
    });
});