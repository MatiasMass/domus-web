import React, {useState} from 'react'
import {Container, Row, Col, Nav} from  'react-bootstrap'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, Box} from '@mui/material'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import clientesAPI from '../../../clientes'
import "../RealEstateAgent.css" 


const ViewClients = () => {

    const [clientes, setClientes] = useState(clientesAPI)

  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg" style= {{height: "105vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='client-h'>Clientes</h1>
                
                <input type="text" placeholder='Buscar Cliente' />
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
    </ Container>
  )
}
export default ViewClients