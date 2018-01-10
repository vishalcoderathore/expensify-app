import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

let wrapper;
// beforeEach(() => {
//     wrapper = shallow(<Header startLogout={() => { }} />);
// });

test('should render header correctly', () => {
    wrapper = shallow(<Header startLogout={() => { }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();

});