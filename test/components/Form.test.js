import Form from '../../src/components/Form';

import axios from 'axios';
jest.mock('axios');

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Form />);
});

describe('<Form /> rendering and making API call', () => {
    it('should fetch user f. name and l. name', () => {
        const id = 5;
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        const mockName = 'from mock'
        const resp = {
            data: {
                name:mockName
            }
        };
        axios.get.mockImplementation(() => Promise.resolve(resp))
        // or
        //axios.get.mockResolvedValue(resp);
        wrapper.find('#cid').simulate('change', {target: { value: `${id}` }})
        wrapper.find('#formButtonAdd').simulate('click')
        wrapper.setState({clientName:mockName})
        expect(wrapper.contains(`${mockName}`)).toBe(true)
        // number of times axios.get was called
        expect(axios.get).toHaveBeenCalledTimes(1)
        // passed argument
        expect(axios.get).toHaveBeenCalledWith(url)
        // The first argument of the first call to the function was url
        expect(axios.get.mock.calls[0][0]).toBe(url);  
        // validate data returned by mock resolve promise
        return axios.get.mock.results[0].value.then(response => expect(response.data).toEqual(resp.data))
    });
});