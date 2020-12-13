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
    describe('rendering city and country', () => {
        it('should render ".weather__key" if city and country are present', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    city: "City",
                    country: "Country",
                }
            });
            expect(component.find('.weather__key')).toHaveLength(1);
            expect(component.find('.weather__value').text())
                .toContain('City, Country');
        })
        it('should not render ".weather__key" if city is missing', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    country: "Country",
                }
            });
            expect(component.find('.weather__key')).toHaveLength(0);
        })
        it('should not render ".weather__key" if country is missing', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    city: "City",
                }
            });
            expect(component.find('.weather__key')).toHaveLength(0);
        })
        it('should not render ".weather__key" if city and country are missing', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {}
            });
            expect(component.find('.weather__key')).toHaveLength(0);
        })

    });
    describe('rendering temperature', () => {
        it('should render ".weather__key" if temperature is present', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    temperature: 15, 
                }
            });
            expect(component.find('.weather__key')).toHaveLength(1);
            expect(component.find('.weather__value').text()).toContain('15');
        })
        it('should not render ".weather__key" if temperature is missing', () => {
            const component = shallow(<WeatherInfo />);
            expect(component.find('.weather__key')).toHaveLength(0);
        })
    });
    describe('rendering humidity', () => {
        it('should render ".weather__key" if humidity is present', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    humidity: 1, 
                }
            });
            expect(component.find('.weather__key')).toHaveLength(1);
            expect(component.find('.weather__value').text()).toContain('1');
        })
        it('should not render ".weather__key" if humidity is missing', () => {
            const component = shallow(<WeatherInfo />);
            expect(component.find('.weather__key')).toHaveLength(0);
        })
    });
    describe('rendering description', () => {
        it('should render ".weather__key" if description is present', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    description: "This is the weather description", 
                }
            });
            expect(component.find('.weather__key')).toHaveLength(1);
            expect(component.find('.weather__value').text())
                .toContain('This is the weather description');
        })
        it('should not render ".weather__key" if description is missing', () => {
            const component = shallow(<WeatherInfo />);
            expect(component.find('.weather__key')).toHaveLength(0);
        })
    });
    describe('rendering errors', () => {
        it('should render ".weather__error" if there is an error', () => {
            const component = shallow(<WeatherInfo />);
            component.setProps({
                info: {
                    error: "It is an error", 
                }
            });
            expect(component.find('.weather__error')).toHaveLength(1);
            expect(component.find('.weather__error').text())
                .toContain('It is an error');
        })
        it('should not render ".weather__error" if there is not an error', () => {
            const component = shallow(<WeatherInfo />);
            expect(component.find('.weather__error')).toHaveLength(0);
        })
    });
});
