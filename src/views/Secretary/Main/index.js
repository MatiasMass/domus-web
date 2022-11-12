import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import SideBar from "../../../layout/SideBar";
import "../Secretary.css";
import clients from "../../../assets/clients.png";
import events from "../../../assets/events.png";

import { Link } from "react-router-dom";

//components
import { Button } from "../../../components/atomics";

const Secretary = () => {
  return (
    <Container>
      <Row className="vw-100" stlye={{ height: "vw-100" }}>
        <Col sm={3} className="bg">
          <SideBar name="Maria Garcia" job="Secretaria de Comercializacion" />
        </Col>
        <Col sm={9} className="mb-101">
          <h1 className="mt-5">Bienvenida Secretaria de Comercializacion</h1>

          <div className="d-flex justify-content-center px-5 mx-5 mt-5">
            <Card style={{ width: "20rem", marginRight: "2rem" }} className="">
              <Card.Img
                className="mt-4"
                src={clients}
                style={{ width: "100%" }}
              />
              <Card.Body className="d-flex flex-column justify-content-end">
                <Button variant="primary">
                  <Nav
                    defaultActiveKey="/home"
                    className="flex-column text-start"
                  >
                    <Link
                      eventKey="link-1"
                      to="/clients"
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        textDecoration: "none",
                      }}
                    >
                      Ir a clientes
                    </Link>
                  </Nav>
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={events} style={{ width: "100%" }} />
              <Card.Body>
                <Button variant="primary" className="w-100">
                  <Nav
                    defaultActiveKey="/home"
                    className="flex-column text-start"
                  >
                    <Link
                      eventKey="link-1"
                      to="/events"
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        textDecoration: "none",
                      }}
                    >
                      Ir a eventos
                    </Link>
                  </Nav>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Secretary;
