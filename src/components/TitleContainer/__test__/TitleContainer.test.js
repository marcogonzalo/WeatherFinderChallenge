import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import TitleContainer from '../TitleContainer';

configure({ adapter: new Adapter() });

describe('<TitleContainer />', () => {
    beforeEach(() => { sinon.stub(console, 'error'); });
    afterAll(() => { console.error.restore(); });
    it('should throw an error if there is no title', () => {
        const component = shallow(<TitleContainer />);
        sinon.assert.calledOnceWithMatch(console.error, 'The prop `title` is marked as required');
    });
});
