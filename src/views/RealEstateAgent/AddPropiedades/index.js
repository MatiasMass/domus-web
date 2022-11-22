import React, {useState} from 'react'
import {Container, Row, Col, Form} from  'react-bootstrap'
import {Button} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import clientesAPI from '../../../clientes'
import './index.css'
import axios from 'axios'
import {useForm} from '../../../hooks/useForms'

const url = "http://localhost:8000/api/propiedades/"

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const AddPropiedades = () => {

    const [clientes, setClientes] = useState(clientesAPI)


    const navigate = useNavigate()

    const initialForm = 
        {
            "codPropiedad": randomString(6, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            "medidas": "",
            "antiguedad": null,
            "amueblado": false,
            "cantHabitaciones": 1,
            "servicios": null,
            "descripcion": "",
            "disponibilidad": true,
            "tipo": "",
            "precio": 1,
            "direccion": {
                "id": 1,
                "provincia": "",
                "ciudad": "",
                "numero": "",
                "barrio": null,
                "piso": null,
                "depto": null
            },
            "cliente": {
                "id": 1,
                "cuil": "",
                "nombre": "",
                "correo": null,
                "telefono": null
            },
            "fotos": []
        }

    const [body, handleChange] = useForm(initialForm) 

    const peticionPost = async (e) =>{
        e.preventDefault()
        console.log(body);
        await axios.post(url, body)
          .then(response =>{ 
            console.log("Todo OK");
            navigate('/estates')
          }
          )
      }

    return (
    <Container>
        <Row>
            <Col sm={3} className = "bg" style= {{height: "130vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}>
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
                                    value={body.amueblado}
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
                                    value={body.tipo}
                                    onChange={handleChange}
                                >
                                    <option value="VENTA">VENTA</option>
                                    <option value="ALQUILER">ALQUILER</option>
                                    <option value="OFICINA">OFICINA</option>
                                </select>
                            </div>
                            <div className="inner-container">
                            <label htmlFor="">Servicios (agua, luz, ...)</label>
                                <select 
                                    id="tipo" 
                                    name="servicios"
                                    value={body.servicios}
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
                                    value={body.disponibilidad}
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
                                    value={body.descripcion}
                                    onChange={handleChange}
                                >
                                </textarea>
                            </div>
                            
                        </div>
                        <h3>Direccion Informacion</h3>
                        <div className="form">
                            <div className="inner-container">
                                <label htmlFor="">Provincia</label>
                                <input 
                                    type="text"
                                    name="provincia"
                                    placeholder='Provincia' 
                                    onChange={handleChange}
                                    value={body.direccion.provincia} 
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Ciudad</label>
                                <input 
                                    type="text"
                                    name="ciudad"
                                    placeholder='Ciudad' 
                                    onChange={handleChange}
                                    value={body.direccion.ciudad} 
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Numero</label>
                                <input 
                                    type="number"
                                    min="1"
                                    placeholder='Numeros' 
                                    onChange={handleChange} 
                                    name = "numero"
                                    value={body.direccion.numero}
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Barrio</label>
                                <input 
                                    type="text"
                                    name="barrio"
                                    placeholder='Barrio' 
                                    onChange={handleChange}
                                    value={body.direccion.barrio} 
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Piso</label>
                                <input 
                                    type="text"
                                    name="piso"
                                    placeholder='Piso' 
                                    onChange={handleChange}
                                    value={body.direccion.piso} 
                                />
                            </div>
                            <div className="inner-container">
                                <label htmlFor="">Depto</label>
                                <input 
                                    type="text"
                                    name="depto"
                                    placeholder='Depto' 
                                    onChange={handleChange}
                                    value={body.direccion.depto} 
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <Button color="success" variant="contained" onClick = {peticionPost} className="button">
                                Agregar Propiedad
                            </Button>
                            <Link to = "/estates">
                                <Button color="error" variant="contained">
                                    Cancelar
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Row>
            </Col>
        </Row>
    </ Container>
  )
}
export default AddPropiedades