import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import {expenses} from '../fixtures/dummyExpenses';
import { shallow } from 'enzyme';

test('should render ExpenseList with the provided expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);

    expect(wrapper).toMatchSnapshot();
});

































