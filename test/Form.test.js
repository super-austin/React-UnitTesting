import Form from '../src/components/Form';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Form />);
});

describe('<Form /> rendering', () => {
    it('should render one <Form>', () => {
        //console.log(wrapper.debug())
        expect(wrapper.find('button')).toHaveLength(1);
    });
});