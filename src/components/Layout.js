import React from "react";

import Banner from "../components/Banner";

import Navbarjc from "../components/Navbarjc";

import SocialMediaContact from "../components/SocialMediaContact";

import Footer from "../components/Footer";

function layout(props) {
  return (
    <React.Fragment>
      <Banner />
      <Navbarjc />
      {props.children}
      <SocialMediaContact />
      <Footer />
    </React.Fragment>
  );
}

export default layout;
