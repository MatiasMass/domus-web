import React from 'react'
import {Container, Row, Col, Nav, Table, Button} from  'react-bootstrap'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "../RealEstateAgent.css" 


const Estates = () => {
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='client-h'>Propiedades</h1>
                
                <input type="text" placeholder='Buscar Inmueble' />
                <div className = "table">
                    <h3 style = {{textAlign: "start"}}>Departamentos</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Cantidad Habitaciones</th>
                                <th>Precio</th>
                                <th>Pago</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25505</td>
                                <td>Alcaraz, Marisol Alejandra </td>
                                <td>Alquiler</td>
                                <td>3</td>
                                <td>$45.000</td>
                                <td>Transferencia</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3 style = {{textAlign: "start"}}>Casas</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Cantidad Habitaciones</th>
                                <th>Precio</th>
                                <th>Pago</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>25505</td>
                                <td>Alcaraz, Marisol Alejandra </td>
                                <td>Alquiler</td>
                                <td>3</td>
                                <td>$45.000</td>
                                <td>Transferencia</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
    </ Container>
  )
}
export default Estates