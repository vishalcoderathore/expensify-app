import React from 'react';
import  ExpenseListItem  from '../../components/ExpenseListItem';
import {expenses} from '../fixtures/dummyExpenses';
import { shallow } from 'enzyme';

test('should render expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);

    expect(wrapper).toMatchSnapshot();
});