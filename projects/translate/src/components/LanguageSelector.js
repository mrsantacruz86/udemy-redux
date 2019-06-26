import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select language
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag es"
          onClick={() => this.context.onLanguageChange("spanish")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
