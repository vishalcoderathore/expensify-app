import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={255}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={5000.99}/>);
    expect(wrapper).toMatchSnapshot();
});