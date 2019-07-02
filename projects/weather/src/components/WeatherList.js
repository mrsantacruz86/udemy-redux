import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {
  renderWeather = cityData => {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={cityData.city.id}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
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
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
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
