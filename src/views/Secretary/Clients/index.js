import React, {useEffect, useState} from "react";
import { Container, Row, Col, Nav, Button} from "react-bootstrap";
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, TextField, Box} from '@mui/material'
import "../Secretary.css";
import SideBar from "../../../layout/SideBar";
import clientesAPI from '../../../clientes'
import { Link } from "react-router-dom";

const Clients = () => {

  const [clientes, setClientes] = useState(clientesAPI)


  console.log(clientes);
  return (
    <Container>
      <Row className="vw-100" stlye={{ height: "vw-100" }}>
        <Col sm={3} className = "bg" stlye={{ height: "vw-105" }}>
          <SideBar name="Maria Garcia" job="Secretaria de Comercializacion" />
        </Col>
        <Col sm={9} className="mb-101">
          <h1 className="client-h">Clientes</h1>
          <div className="contenedor">

            <input type="text" placeholder="Buscar Cliente" />
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
          <TableContainer>
                  <Table style = {{height: "500px", overflow: "auto"}}>
                    <TableHead>
                      <TableCell>DNI</TableCell>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Apellido</TableCell>
                      <TableCell>Fecha Nacimineto</TableCell>
                      <TableCell>Telefono</TableCell>
                      <TableCell>Direccion</TableCell>
                      <TableCell>Correo</TableCell>
                      <TableCell>Tipo</TableCell>
                      <TableCell></TableCell>
                    </TableHead>
                    <TableBody>
                      {clientes.map(cliente => {
                        return(
                          <TableRow key = {cliente.id}>
                            <TableCell>{cliente.dni}</TableCell>
                            <TableCell>{cliente.nombre}</TableCell>
                            <TableCell>{cliente.apellido}</TableCell>
                            <TableCell>{cliente.fecha}</TableCell>
                            <TableCell>{cliente.telefono}</TableCell>
                            <TableCell>{cliente.direccion}</TableCell>
                            <TableCell>{cliente.correo}</TableCell>
                            <TableCell>{cliente.tipoCliente}</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>

        </Col>
      </Row>
    </Container>
  );
};
export default Clients;
