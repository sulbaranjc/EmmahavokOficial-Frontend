import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../styles/main.css";
import Layout from "../components/Layout";
import Productos from "../components/Productos";
import Contactar from "../components/Contactar";
import Notfound from "../components/NotFound";
import Home from "../components/Home";

function Main() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Productos" component={Productos} />
          <Route exact path="/Contactar" component={Contactar} />
          <Route component={Notfound} /> */}
          <Route path="*" component={Productos} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Main;
