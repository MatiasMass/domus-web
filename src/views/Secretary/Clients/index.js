import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Container, Row, Col, Nav, Button} from "react-bootstrap";
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, TextField, Box} from '@mui/material'
import "../Secretary.css";
import SideBar from "../../../layout/SideBar";
import { Link } from "react-router-dom";

const urlClientes = "http://localhost:8000/api/clientes/"

const Clients = () => {
  const [clientes, setClientes] = useState([])

  const getClientes = async () =>{

    try {
        const response = await axios.get(urlClientes)
        if (response?.status === 200){
            const initialClientes = response.data
            setClientes(initialClientes)
            return
        }
    } catch (error) {
        console.error(error.message);
    }

  }

  useEffect(() => {
    getClientes()
  }, [])

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
                      <TableCell>CUIL</TableCell>
                      <TableCell>Nombre y Apellido</TableCell>
                      <TableCell>Telefono</TableCell>
                      <TableCell>Correo</TableCell>
                    </TableHead>
                    <TableBody>
                      {clientes.map(cliente => {
                        return(
                          <TableRow key = {cliente.id}>
                            <TableCell>{cliente.cuil}</TableCell>
                            <TableCell>{cliente.nombre}</TableCell>
                            <TableCell>{cliente.telefono ? cliente.telefono : "No especificado"}</TableCell>
                            <TableCell>{cliente.correo ? cliente.telefono : "No especificado"}</TableCell>
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
