import React, { useState } from "react";
import './FormContainer.css';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

function FormContainer() {
    const [state, setState] = useState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    });
    async function getWeather(e) {
        e.preventDefault();
        const city = e.target.elements.city.value || "Madrid";
        const country = e.target.elements.country.value || "es";
        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await api_call.json();
        if (city && country) {
            setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: "",
            });
        } else {
            setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the values.",
            });
        }
    };

    return (
        <div className="col-7 form-container">
            <form onSubmit={getWeather}>
                <input type="text" name="city" placeholder="Madrid" />
                <input type="text" name="country" placeholder="es" />
                <button>Get Weather</button>
            </form>
            <WeatherInfo info={state} />
        </div>
    );
}

export default FormContainer;
