import React, { Component } from "react";

class App extends Component {
  state = { resource: "posts" };
  render() {
    return (
      <div className="App">
        <div>
          <button
            class="ui button primary"
            onClick={() => this.setState({ resource: "posts" })}
          >
            Posts
          </button>
          <button
            class="ui button primary"
            onClick={() => this.setState({ resource: "todos" })}
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
