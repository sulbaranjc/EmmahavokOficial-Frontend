import React, { Component } from "react";

import FormikForm from "./FormikForm";

import "../styles/contactar.css";

import emmaform from "../images/emma-gif.gif";

export default class Contactar extends Component {
  state = {
    modalIsOpen: false,
  };
  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="col-12 text-center p-3">
          <h1>Formulario</h1>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 ">
            <FormikForm
              onCloseModal={this.handleCloseModal}
              onOpenModal={this.handleOpenModal}
              modalIsOpen={this.state.modalIsOpen}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <img
              className=" img-fluid imgform 
              mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0"
              src={emmaform}
              alt="Logo de Banda"
            />
          </div>
        </div>
      </div>
    );
  }
}
