import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Blog
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Post
        </Link>
      </div>
    </div>
  );
};

export default Header;
