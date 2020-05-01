import React from "react";
import "../styles/PaypalButton.css";

const PaypalButton = ({ paypalValue }) => {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={paypalValue} />
      <input
        type="image"
        className="Paypal__Button"
        src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_buynow_LG.gif"
        border="0"
        name="submit"
        alt="PayPal, la forma rápida y segura de pagar en Internet."
      />
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
};
export default PaypalButton;
