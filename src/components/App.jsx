import React from "react";
import TitleContainer from './TitleContainer/TitleContainer';
import "./App.css";
import WeatherInfo from "./WeatherInfo/WeatherInfo";

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || "Madrid";
    const country = e.target.elements.country.value || "es";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values.",
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <TitleContainer
                    title="Weather Finder"
                    subtitle="Find out temperature, conditions and more..."
                />
                <div className="col-7 form-container">
                  <form onSubmit={this.getWeather}>
                    <input type="text" name="city" placeholder="Madrid" />
                    <input type="text" name="country" placeholder="es" />
                    <button>Get Weather</button>
                  </form>
                  <WeatherInfo info={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
