import React from "react";

import "../styles/Producto.css";

import PaypalButton from "./PaypalButton";

function Producto(props) {
  return (
    <div className="col-12 col-lg-6 card-deck col-md-6 text-center">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal text-body">{props.title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title text-body pricing-card-title">
            {props.charge}{" "}
            <small className="text-muted">{props.currency}</small>
          </h1>
          <p className="card-text card-p">{props.descrip}</p>
          <a
            className="card-a"
            href={props.videoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button
              type="button"
              className="btn btn-lg btn-block btn-outline-primary"
            >
              Muestra de Videos
            </button>
          </a>
          <PaypalButton paypalValue={props.paypalValue} />
        </div>
      </div>
    </div>
  );
}

export default Producto;
