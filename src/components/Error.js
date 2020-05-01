import React from "react";
import "../styles/error.css";

// const b = " ";

const Error = ({ touched, message }) => {
  if (!touched) {
    return <div className="parpadea text">&nbsp;</div>;
  }
  if (message) {
    return <div className="parpadea text">{message}</div>;
  }
  return (
    <div className="form-message valid">
      {" "}
      <br />{" "}
    </div>
  );
};

export default Error;
