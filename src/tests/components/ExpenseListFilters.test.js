import React from 'react';
import { shallow } from 'enzyme';
import  {ExpenseListFilters}  from '../../components/ExpenseListFilters';
import {expenses} from '../fixtures/dummyExpenses';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                        filters = {filters}
                        setTextFilter = {setTextFilter}
                        setStartDate = {setStartDate}
                        setEndDate = {setEndDate}
                        sortByDate = {sortByDate}
                        sortByAmount = {sortByAmount} 
                    />);
});


test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'gas'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
      });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    
});

test('should sot by date', () => {
    const value  = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
    
});

test('should sort by amount', () => {
    const value  = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(8, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calenderFocused = 'startDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});