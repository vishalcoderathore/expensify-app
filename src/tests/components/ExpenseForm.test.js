import React from 'react';
import  ExpenseForm  from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import {expenses} from '../fixtures/dummyExpenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});
  
test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error message on invalid form submit', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.find('ErrorPopup').exists()).toEqual(true);
  expect(wrapper).toMatchSnapshot();
});
  
test('should set description on input change', () => {
  const value = 'New description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should set note on text area change', () => {
  const value = 'New Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', () => {
  const value = '49.99';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should not set amount if invalid input', () => {
  const value = '49.9999';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit = {onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault : () => { }
  });
  expect(wrapper.state('error')).toEqual(false);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description : expenses[0].description,
    amount : expenses[0].amount,
    note : expenses[0].note,
    createdAt : expenses[0].createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focussed on focus change', () => {
  const focused = {focused: true};
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop('onFocusChange')(focused);
  expect(wrapper.state('calenderFocused')).toEqual(true);
});