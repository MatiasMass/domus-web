import React from "react";
import { Container, Row, Col, Nav, Table, Button } from "react-bootstrap";
import "../Secretary.css";
import SideBar from "../../../layout/SideBar";

import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <Container>
      <Row className="vw-100" stlye={{ height: "vw-100" }}>
        <Col sm={3} className="bg">
          <SideBar name="Maria Garcia" job="Secretaria de Comercializacion" />
        </Col>
        <Col sm={9} className="mb-101">
          <h1 className="client-h">Clientes</h1>

          <input type="text" placeholder="Buscar Cliente" />
          <div className="table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha Nacimineto</th>
                  <th>Telefono</th>
                  <th>Direccion</th>
                  <th>Correo</th>
                  <th>Tipo Cliente</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan</td>
                  <td>19/10/1995</td>
                  <td>55-5555-55</td>
                  <td>Zacarias Sanchez 55</td>
                  <td>Correo@gmail.com</td>
                  <td>Propietario</td>
                  <td>Activo</td>
                </tr>
                <tr>
                  <td>Juan</td>
                  <td>19/10/1995</td>
                  <td>55-5555-55</td>
                  <td>Zacarias Sanchez 55</td>
                  <td>Correo@gmail.com</td>
                  <td>Propietario</td>
                  <td>Activo</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="success">
              <Nav defaultActiveKey="/home" className="flex-column text-start">
                <Link
                  to="/addclients"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Agregar Cliente
                </Link>
              </Nav>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Clients;
