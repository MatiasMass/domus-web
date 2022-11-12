import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import SideBarRealEstate from "../../../layout/SideBarRealEstate";
import "../RealEstateAgent.css";

const CustomCard = ({ name, total }) => {
  return (
    <Card border="primary" style={{ width: "18rem", margin: "1rem" }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>{total}</Card.Title>
      </Card.Body>
    </Card>
  );
};

const RealEstateAgent = () => {
  return (
    <Container>
      <Row className="vw-100" stlye={{ height: "vw-100" }}>
        <Col sm={3} className="bg">
          <SideBarRealEstate name="Clara" job="Agente Inmubiliario" />
        </Col>
        <Col sm={9} className="mb-101">
          <h1 className="mt-5">Bienvenida Agente Inmobiliario</h1>
          <div className="d-flex flex-wrap justify-content-center mt-5">
            <CustomCard name="Clientes" total="20" />
            <CustomCard name="Propiedades" total="29" />
            <CustomCard name="Eventos" total="3" />
            <CustomCard name="Departamentos" total="20" />
            <CustomCard name="Casas" total="9" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RealEstateAgent;
