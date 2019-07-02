import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import GoogleMap from "./GoogleMap";

class WeatherList extends Component {
  renderWeather = cityData => {
    const name = cityData.city.name;
    const { lat, lon } = cityData.city.coord;
    const temps = cityData.list.map(
      weather => (9 / 5) * (Number(weather.main.temp) - 273.15) + 32
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="red" units="°F" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  };

  render() {
    const { weather } = this.props;
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (°F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {weather.map(citydata => {
              return this.renderWeather(citydata);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({ weather }) => {
  return {
    weather
  };
};

export default connect(mapStateToProps)(WeatherList);
