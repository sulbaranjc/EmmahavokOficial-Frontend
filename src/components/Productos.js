import React, { Component } from "react";
import Producto from "../components/Producto";
import Dataproducts from "../sample/Dataproducts.json";
import "../styles/Protuctos.css";

const Products = Dataproducts.map((item, idx) => {
  return (
    <Producto
      title={item.title}
      charge={item.charge}
      currency={item.currency}
      descrip={item.descrip}
      videoLink={item.videoLink}
      paypalValue={item.paypalValue}
    />
  );
});

class Productos extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <h1 className="Products-title">Productos</h1>

        {Products}
      </div>
    );
  }
}

export default Productos;
