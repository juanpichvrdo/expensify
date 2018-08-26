import Enzyme from 'enzyme';
import Adapter from 'ezyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});