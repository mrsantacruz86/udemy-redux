import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Enviar";
    return <button className="ui button primary">{text}</button>;
  }
}

// This does the same as the statement in line 5
// Button.contextType = LanguageContext;

export default Button;
