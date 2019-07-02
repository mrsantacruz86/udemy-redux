import React from "react";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

const App = () => {
  return (
    <div className="ui container">
      <header className="jumbotron">
        <h1 className="display-4">Weather Forecasts!</h1>
      </header>
      <SearchBar />
      <WeatherList />
    </div>
  );
};

export default App;
