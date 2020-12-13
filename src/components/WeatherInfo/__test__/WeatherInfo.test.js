import React from "react";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import WeatherInfo from '../WeatherInfo';

configure({ adapter: new Adapter() });

describe('<WeatherInfo />', () => {
    beforeEach(() => { sinon.stub(console, 'error'); });
    afterEach(() => { console.error.restore(); });
    describe('props validation', () => {
        it('should not throw an error if there is no info', () => {
            const component = shallow(<WeatherInfo />);
            sinon.assert.notCalled(console.error);
        });
        it('should throw an error if info is not an object', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: "not an object",
            });
            sinon.assert.calledWithMatch(console.error, 'expected `object`');
        });
        it('should not throw an error if info is not complete', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    temperature: undefined,
                }
            });
            sinon.assert.notCalled(console.error);
        });
    });
});
