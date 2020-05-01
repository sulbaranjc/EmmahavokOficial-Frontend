import React from "react";
import logo from "../images/main_banner01.jpg";

import "../styles/Banner.css";

class Banner extends React.Component {
  render() {
    return (
      <figure className="banner">
        <img className="img-fluid" src={logo} alt="Logo de EmmaHavokOficial" />
      </figure>
    );
  }
}

export default Banner;
