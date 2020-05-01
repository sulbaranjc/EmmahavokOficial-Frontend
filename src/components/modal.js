import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal.css";

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <div className="text-center">{children}</div>
        <div>
          <button
            onClick={onClose}
            className="btn btn-success btn-lg btn-block"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
export default Modal;
