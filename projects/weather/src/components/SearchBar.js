import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Get a five-day forecast in your favorite cities."
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchWeather }
)(SearchBar);
