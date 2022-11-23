import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Container, Row, Col, Nav} from "react-bootstrap";
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Box, Button} from '@mui/material'
import "../Secretary.css";
import SideBar from "../../../layout/SideBar";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const urlClientes = "http://localhost:8000/api/clientes/"

const styleModalCerrar = {
  position: 'absolute',
  overflow: "auto",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
};

const Clients = () => {
  const [clientes, setClientes] = useState([])
  const [modalEliminar, setModalEliminar] = useState(false)
  const [clienteSeleccionado, setClienteSeleccionado] = useState({})
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

  const abrirCerrarModalEliminar = () =>{
    setModalEliminar(!modalEliminar)
  }

  const seleccionarCliente = (cliente, caso)=>{
    setClienteSeleccionado(cliente);
    abrirCerrarModalEliminar()
  }

  const peticionDelete=async()=>{
    await axios.delete(urlClientes+ clienteSeleccionado.id)
    .then(response=>{
      setClientes(clientes.filter(consola=>consola.id!==clienteSeleccionado.id));
      // console.log(data);
    })
    abrirCerrarModalEliminar();
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
            <Link to = "/addclients">
                <Button variant="contained" color="success">
                  Agregar Cliente
                </Button>
            </Link>
            
          </div>
          <TableContainer>
                  <Table style = {{height: "500px", overflow: "auto"}}>
                    <TableHead>
                      <TableCell>CUIL</TableCell>
                      <TableCell>Nombre y Apellido</TableCell>
                      <TableCell>Telefono</TableCell>
                      <TableCell>Correo</TableCell>
                      <TableCell></TableCell>
                    </TableHead>
                    <TableBody>
                      {clientes.map(cliente => {
                        return(
                          <TableRow key = {cliente.id}>
                            <TableCell>{cliente.cuil}</TableCell>
                            <TableCell>{cliente.nombre}</TableCell>
                            <TableCell>{cliente.telefono ? cliente.telefono : "No especificado"}</TableCell>
                            <TableCell>{cliente.correo ? cliente.telefono : "No especificado"}</TableCell>
                            <TableCell>
                              <Box sx = {{cursor: "pointer"}}>
                                <Link to={`/editar/${cliente.id}`}>
                                  <EditIcon color='primary' />
                                </Link>
                              </Box>
                              &nbsp;&nbsp;&nbsp;
                              <Box sx = {{cursor: "pointer"}}>
                                <DeleteIcon 
                                  color="error"
                                  onClick={()=>seleccionarCliente(cliente, 'Eliminar')} 
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Modal 
                open = {modalEliminar}
                close = {abrirCerrarModalEliminar}>
                  <>
                    <Box sx = {styleModalCerrar}>
                      <p>Estas seguero que deseas eliminar {clienteSeleccionado &&  clienteSeleccionado.nombre} ?</p>
                      <Box sx = {{display: "flex", flexDirection: "row", gap: 1}}>
                        <Button variant="outlined" onClick = {abrirCerrarModalEliminar}>Cancelar</Button>
                        <Button color="error" variant="contained" onClick={()=>peticionDelete()} >Aceptar</Button>
                      </Box>
                    </Box>
                  </>
              </Modal>   
        </Col>
      </Row>
    </Container>
  );
};
export default Clients;
