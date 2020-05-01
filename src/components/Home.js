import React, { useEffect } from "react";

import { Card, Container, Col, Row, Image } from "react-bootstrap";

import "../styles/home.css";

import { Link } from "react-router-dom";

import EmmaHavokFlyer from "../images/EmmaHavok FLYER.png";
import YouTubeIcon from "../images/YouTubeIcon.png";

// import emmaLogoPajaro from "../images/inicio.gif";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container portada">
      <Container>
        <Row className="title01">
          <Col sm={12} xl={4}>
            <Image src={YouTubeIcon} rounded fluid />
          </Col>
          <Col sm={12} xl={8} className="txt1">
            <p className="py-lg-5">
              Somos el Canal de metal mas grande de habla hispana en YouTube con
              millones de sucriptores!
            </p>
          </Col>
        </Row>
        <Row className="title02">
          <Col sm={12} xl={8} className="txt1">
            <p>
              Perteneces a una banda de rock y necesitas promocionar tus
              proyectos? <br />
            </p>
            <p>EN </p>
            <p className="emmafont">
              EMMAHAVOK <br />
            </p>
            <p>
              Contamos con Medios de difusión como YouTube, Facebook, Twitter e
              Instagram.
              <br />
            </p>
            <Link className="plink" to="/Productos">
              <p className="plink">
                Por un precio único te daremos el reconocimiento e impulso
                global que buscas.
                <br />
              </p>
            </Link>
            <Link className="plink" to="/Contactar">
              <p className="plink">
                Contactanos llenando el formulario, asi <br /> nuestro personal
                de mercadeo y negocios se comunicara contigo, para afinar
                detalles.
                <br />
              </p>
            </Link>
          </Col>
          <Col sm={12} xl={4}>
            <Image src={EmmaHavokFlyer} rounded fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
