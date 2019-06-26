import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends Component {
  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Enviar")}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

// This does the same as the statement in line 5
// Button.contextType = LanguageContext;

export default Button;
