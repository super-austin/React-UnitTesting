import Form from '../src/components/Form';

import axios from 'axios';
jest.mock('axios');

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Form />);
});

describe('<Form /> rendering', () => {
    it('should fetch user f. name and l. name', () => {
        const id = 5;
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const resp = {data: {name:"from mock"}};
        axios.get.mockImplementation(() => Promise.resolve(resp))

        wrapper.find('#cid').simulate('change', {target: { value: `${id}` }})
        wrapper.find('#formButtonAdd').simulate('click')

        // number of times axios.get was called
        expect(axios.get).toHaveBeenCalledTimes(1)
        // passed argument
        expect(axios.get).toHaveBeenCalledWith(url)
        // The first argument of the first call to the function was url
        expect(axios.get.mock.calls[0][0]).toBe(url);      
    });
});