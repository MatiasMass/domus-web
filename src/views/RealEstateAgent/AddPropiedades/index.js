import React, {useState} from 'react'
import {Container, Row, Col, Form} from  'react-bootstrap'
import { Link } from "react-router-dom";
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import clientesAPI from '../../../clientes'
import './index.css'
import axios from 'axios'
import { logDOM } from '@testing-library/react';

const url = "http://localhost:8000/api/propiedades/"

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const AddPropiedades = () => {

    const [clientes, setClientes] = useState(clientesAPI)
    const [cliente, setCliente] = useState(clientes[0].dni);
    const [amueblado, setAmueblado] = useState(false);
    const [descripcion, setDescripcion] = useState("")
    const [tipo, setTipo] = useState("VENTA")
    const [servicios, setServicios] = useState(false)
    const [disponibilidad, setDisponibilidad] = useState(false)
    const [modalInsertar, setModalInsertar] = useState(false)
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)

    const [propiedadSeleccionada, setPropiedadSeleccionada] = useState(
        {
            "id": 1,
            "codPropiedad": randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            "medidas": "",
            "antiguedad": null,
            "amueblado": amueblado,
            "cantHabitaciones": 1,
            "servicios": servicios,
            "descripcion": "Sin descripcion",
            "disponibilidad": disponibilidad,
            "tipo": tipo,
            "precio": 1,
            "direccion": {
                "id": 1,
                "provincia": "CHACO",
                "ciudad": "RESISTENCIA",
                "numero": "123",
                "barrio": null,
                "piso": null,
                "depto": null
            },
            "cliente": {
                "id": 1,
                "cuil": "20-15100200",
                "nombre": "JUAN PEREZ",
                "correo": null,
                "telefono": null
            },
            "fotos": []
            })
  
  
      const handleChange = (event) =>{
        // e.preventDefaul()

        if (event.target.name === "amueblado"){
            setAmueblado(event.target.value)
        }else if (event.target.name === "tipo"){
            setTipo(event.target.value)
        }else if (event.target.name === "descripcion"){
            setDescripcion(event.target.value)
        }else if (event.target.name === "servicios"){
            setServicios(event.target.value)
        }else if (event.target.name === "disponibilidad"){
            setDisponibilidad(event.target.value)
        }


        const name = event.target.name
        const value = event.target.value
        setPropiedadSeleccionada(prevState =>({
          ...prevState,
          [name]: value
        }))
        console.log(propiedadSeleccionada);
      }
  
     

      
    // const [clientes, setClientes] = useState(clientesAPI)
    const peticionPost = async () =>{
        await axios.post(url, propiedadSeleccionada)
          .then(response =>{ 
            console.log("Todo OK");
          }
          )
      }

    return (
    <Container>
        <Row>
            <Col sm={3} className = "bg" style= {{height: "120vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9} className = "100vh" style={{height: "100vh"}}>
                <Row>
                    <h1 style={{marginTop: "20px"}}>Agregar Nueva Propiedad</h1>
                    <form action="">
                        <h3 className = "info-propiedad">Propiedad Informacion</h3>
                        <div className="form">
                            <div className="inner-container">
                                <label htmlFor="">Codigo de Propiedad</label>
                                <input 
                                    type="text" 
                                    placeholder='CP' 
                                    readOnly
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Cantidad de Habitaciones</label>
                                <input 
                                    type="number"
                                    min="1"
                                    placeholder='Cantidad Habitaciones' 
                                    onChange={handleChange} 
                                    name = "cantHabitaciones"/>
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Amueblado</label>
                                <select 
                                    name="amueblado"
                                    value={amueblado}
                                    onChange={handleChange}
                                >
                                    <option value={true}>Si</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                            {/* Tipo */}
                            <div className="inner-container">
                                <label htmlFor="">Tipo</label>
                                <select 
                                    id="tipo" 
                                    name="tipo"
                                    value={tipo}
                                    onChange={handleChange}
                                >
                                    <option value="VENTA">VENTA</option>
                                    <option value="ALQUILER">ALQUILER</option>
                                </select>
                            </div>
                            <div className="inner-container">
                            <label htmlFor="">Servicios (agua, luz, ...)</label>
                                <select 
                                    id="tipo" 
                                    name="servicios"
                                    value={servicios}
                                    onChange={handleChange}
                                >
                                    <option value={true}>Con serivicios</option>
                                    <option value={false}>Sin servicios</option>
                                </select>
                            </div>
                            <div className="inner-container">
                            <label htmlFor="">Disponiblidad</label>
                                <select 
                                    id="cars" 
                                    name="disponibilidad"
                                    value={disponibilidad}
                                    onChange={handleChange}
                                >
                                    <option value={true}>No</option>
                                    <option value={false}>Si</option>
                                </select>
                            </div> 
                            <div className="inner-container">
                                <label htmlFor="">Precio $</label>
                                <input 
                                    type="number"
                                    min="1"
                                    placeholder='Precio $' 
                                    onChange={handleChange} 
                                    name = "precio"/>
                            </div>                           
                            <div className="inner-container textarea">
                                <label htmlFor="">Descripcion</label>
                                {/* <input type="text" placeholder='ID'/> */}
                                <textarea 
                                    name="descripcion" 
                                    id="descripcion" 
                                    cols="30" 
                                    rows="30"
                                    value={descripcion}
                                    onChange={handleChange}
                                >
                                </textarea>
                            </div>
                            
                        </div>
                        <h3>Direccion Informacion</h3>
                        <div className="form">
                            <div className="inner-container">
                                <label htmlFor="">Codigo de Propiedad</label>
                                <input 
                                    type="text" 
                                    placeholder='ID' 
                                    readOnly
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Cantidad de Habitaciones</label>
                                <input 
                                    type="number"
                                    min="1"
                                    placeholder='Cantidad Habitaciones' 
                                    onChange={handleChange} 
                                    name = "cantHabitaciones"/>
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Codigo de Propiedad</label>
                                <input type="text" placeholder='ID'/>
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Codigo de Propiedad</label>
                                <input type="text" placeholder='ID'/>
                            </div>
                            
                        </div>
                        <button onClick = {peticionPost}>
                            {/* <Nav defaultActiveKey="/home" className="flex-column text-start"> */}
                            <Link
                                to="/estates"
                                style={{textDecoration: "none" }}>
                                Agregar Cliente
                            </Link>
                            {/* </Nav> */}
                        </button>
                    </form>
                </Row>
            </Col>
        </Row>
    </ Container>
  )
}
export default AddPropiedades