import React from 'react';
import PropTypes from 'prop-types';
import './WeatherInfo.css';

function WeatherInfo({ info }) {
    return (
        <div className="weather__info">
            {info.city && info.country && (
                <p className="weather__key">
                    {" "}
                    Location:
                    <span className="weather__value">
                        {" "}
                        {info.city}, {info.country}
                    </span>
                </p>
            )}
            {info.temperature && (
                <p className="weather__key">
                    {" "}
                    Temperature:
                    <span className="weather__value">
                        {" "}
                        {info.temperature}{" "}
                    </span>
                </p>
            )}
            {info.humidity && (
                <p className="weather__key">
                    {" "}
                    Humidity:
                    <span className="weather__value">
                        {" "}
                        {info.humidity}{" "}
                    </span>
                </p>
            )}
            {info.description && (
                <p className="weather__key">
                    {" "}
                    Conditions:
                    <span className="weather__value">
                        {" "}
                        {info.description}{" "}
                    </span>
                </p>
            )}
            {info.error && (
                <p className="weather__error">{info.error}</p>
            )}
        </div>
    );
}

WeatherInfo.propTypes = {
    info: PropTypes.object,
}

WeatherInfo.defaultProps = {
    info: {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }
}

export default WeatherInfo;
