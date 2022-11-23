import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container, Row, Col, Nav} from  'react-bootstrap'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, Box} from '@mui/material'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "../RealEstateAgent.css" 

const urlClientes = "http://localhost:8000/api/clientes/"

const ViewClients = () => {

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


  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg" style= {{height: "100vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9} className = "mb-101" style= {{height: "100vh", overflow: "auto"}}>
                <h1 className='client-h'>Clientes</h1>
                
                <input type="text" placeholder='Buscar Cliente' />
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
    </ Container>
  )
}
export default ViewClients