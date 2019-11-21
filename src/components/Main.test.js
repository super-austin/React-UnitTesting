import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Form from '../../src/components/Form';

let wrapper;

beforeEach(() => {
    wrapper = mount(<Form />);
});

describe('<Form /> rendering', () => {
    it('should render one <Form>', () => {
        //console.log(wrapper.debug())
        expect(wrapper.find(Form)).toHaveLength(1);
    });
});
