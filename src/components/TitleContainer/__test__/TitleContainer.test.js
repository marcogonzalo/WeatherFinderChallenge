import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import TitleContainer from '../TitleContainer';

configure({ adapter: new Adapter() });

describe('<TitleContainer />', () => {
    beforeEach(() => { sinon.stub(console, 'error'); });
    afterEach(() => { console.error.restore(); });
    describe('props validation', () => {
        it('should throw an error if there is no title', () => {
            const component = shallow(<TitleContainer />);
            sinon.assert.calledOnceWithMatch(console.error, 'The prop `title` is marked as required');
        });
    });
    it('should render a title', () => {
        const component = shallow(<TitleContainer />);
        component.setProps({ title: "Title test" });
        expect(component.find('.title-container__title')).toHaveLength(1);
        expect(component.find('.title-container__title').text()).toBe('Title test');
    });
    it('should render a subtitle', () => {
        const component = shallow(<TitleContainer />);
        component.setProps({ title: "Title test", subtitle: "Subtitle test" });
        expect(component.find('.title-container__subtitle')).toHaveLength(1);
        expect(component.find('.title-container__subtitle').text()).toBe('Subtitle test');
    })
});
