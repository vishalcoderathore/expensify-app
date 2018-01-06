import React from 'react';
import PageNotFound from '../../components/PageNotFound';
import { shallow } from 'enzyme';


test('should render not fond page correctly', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
});