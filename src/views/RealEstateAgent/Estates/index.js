import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Nav, Table} from  'react-bootstrap'
// Ventana modal
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// Ventana Modal
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "./Estates.css" 


const url = "http://localhost:3000/api/propiedades"
const clientes = [
  "Matias Mass",
  "Christian Gomez",
  "Thomas Ojeda",
  "Facuando Barboza",
  "Joaquin Desza"
]

const Estates = () => {
    const [propiedades, setPropiedades] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getPropiedades = async () =>{
        
        console.log(url);
        try {
          const response = await axios.get(url)
            if (response?.status === 200){
              const initialPropideades = response.data
              console.log(initialPropideades);
              setPropiedades(initialPropideades)
              return
            }
        } catch (error) {
          console.error(error.message);
          // alert("The country doesn't exist")
          // ref.current = `${error.mes            setError(false)sage}`
        }
    
      }
    // getPropiedades()
    // console.log(propiedades);
    useEffect(() => {
        // setPropiedades(getPropiedades())
        getPropiedades()
    }, [])
    
    // console.log(propiedades)
    // console.log("estoy en estate");
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "100vh"}}>
            <Col sm={3} className = "bg" style= {{height: "100vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}> 
            {/* / className = "mb-101" */}
                <h1 className='' style={{margin: "20px 0"}}>Propiedades</h1>
                <div>
                  {/* <button className = "btn btn-success" style={{marginRight: "15px"}}>Agregar una propiedad</button> */}
                  {/* <input type="text" placeholder='Buscar Inmueble' /> */}
                  {/* Ventana modal */}
                    <>
                      <Button variant="success" onClick={handleShow}>
                        Agregar Propiedad
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Agregar Propiedad</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Codigo de la Propiedad</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Codigo propiedad"
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Clientes</Form.Label>
                              <Form.Select>
                                {clientes.map(cliente => {
                                  return(
                                    <option>{cliente}</option>
                                  )
                                  })}
                              </Form.Select>
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Descripcion de la propiedad</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </>

                  {/* Ventana modal */}
                </div>
                <div className = "table" style={{overflowY: "scroll"}}>
                    {/* <button className = "btn btn-success" onClick= {getPropiedades}>Click me</button> */}
                    <h3 style = {{textAlign: "start"}}>Propiedades</h3>
                    <div id="table-wrapper">
                      <div id="table-scroll">
                        <Table striped bordered hover style={{overflowY: "scroll"}}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Cliente</th>
                                    <th>Antiguedad</th>
                                    <th>Cantidad Habitaciones</th>
                                    <th>Precio</th>
                                    <th>Pago</th>
                                    <th>Modificar</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>

                                {propiedades.map(propiedad => {
                                    return(
                                        <tr>
                                            <>
                                                <td>{propiedad.codPropiedad}</td>
                                                <td>{propiedad.medidas}</td>
                                                <td>{propiedad.antiguedad ? "No especificado" : "No especificado"}</td>
                                                <td>{propiedad.cantHabitaciones}</td>
                                                <td>{propiedad.descripcion}</td> 
                                                <td>sds</td>   
                                                <td><button className='btn btn-primary'>M</button></td>  
                                                <td><button className='btn btn-danger'>X</button></td>
                                            </>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                      </div>
                    </div> 
                </div>
            </Col>
        </Row>
    </ Container>
  )
}
export default Estates