import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Gallery from '../client/src/components/Gallery.jsx'

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {

})