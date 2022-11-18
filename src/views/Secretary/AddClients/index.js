import React, {useState} from 'react'
import {Container, Row, Col, Form, FloatingLabel, Button, Nav} from  'react-bootstrap'
import { Link } from "react-router-dom";
import "../Secretary.css" 
import SideBar from '../../../layout/SideBar'
import clientesAPI from '../../../clientes'

const AddClients = () => {

    // const [clientes, setClientes] = useState(clientesAPI)
    const agregarCliente = ()=>{
        clientesAPI.push(
            {id: clientesAPI.length + 1,
                dni: 4555555,
                nombre: "Carlos",
                apellido: "De la villa",
                fecha: "19/10/1995",
                telefono: "55-555-55",
                direccion: "Zacarias  Sanchez 55",
                correo: "Correo@gmail.com",
                tipoCliente: "Propietario",
                estado: "activo"
            },
        )
    }

    return (
    <Container>
        <Row>
            <Col sm={3} className = "bg">
                <SideBar name = "Maria Garcia" job = "Secretaria de Comercializacion" />
            </Col>
            <Col sm={9} className = "mb-101">
                <Form className='mt-5'>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Nombre" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Pais</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Pais" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Telefono: 123-1234567" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Apellido" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Provincia" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese Email" />
                                <Form.Text className="text-muted">
                                    ejemplo@email.com
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Nacionalidad</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Nacionalidad" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Ciudad" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">

                                <Form.Label>Tipo</Form.Label>
                                <Form.Select>
                                    <option>Propietario</option>
                                    <option>Inquilino</option>
                                    <option>Corporativo</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>DNI</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese DNI" />
                                <Form.Text className="text-muted">
                                    8.888.888
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                            <Form.Label>Nacimiento</Form.Label>
                            <div>
                                <input type="date" id="start" name="trip-start" />
                            </div>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select>
                                        <option>Activo</option>
                                        <option>Inactivo</option>
                                    </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="" controlId="">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Select>
                                        <option>Masculino</option>
                                        <option>Femenino</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="" controlId="">
                                <Form.Label>Direccion</Form.Label>
                                <FloatingLabel controlId="floatingTextarea" label="Direccion" className="mb-3">
                                    <Form.Control as="textarea" placeholder="Ingrese Direccion" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="" controlId="">
                                <Form.Label>Tipo Facturacion</Form.Label>
                                <Form.Select>
                                        <option>Mes atrasado</option>
                                        <option>Mes adelantado</option>
                                        <option>Sin abonar</option>
                                    </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>           
                    <Row>
                        <div className="buttons">
                        <Button variant="success" onClick = {agregarCliente}>
                            <Nav defaultActiveKey="/home" className="flex-column text-start">
                            <Link
                                to="/clients"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                Agregar Cliente
                            </Link>
                            </Nav>
                        </Button>
                            <Button className='bg-danger'>Cancelar</Button>            
                        </div>
                    </Row>
                </Form>
            </Col>
        </Row>
    </ Container>
  )
}
export default AddClients