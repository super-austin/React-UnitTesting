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
