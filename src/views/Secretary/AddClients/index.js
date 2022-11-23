import React, {useState} from 'react'
import axios from 'axios'
import {Container, Row, Col} from  'react-bootstrap'
import {Button} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import "../Secretary.css" 
import SideBar from '../../../layout/SideBar'
import {useForm} from '../../../hooks/useForms'
import './index.css'

const urlClientes = "http://localhost:8000/api/clientes/"

const InputText = ({ name, placeholder, type = "text", value = "", handleChange, read = false}) =>{
    return(
        <>
            <input 
                name = {name}
                type = {type}
                defaultValue = {value}
                onChange = {handleChange}
                placeholder={placeholder}
                readOnly = {read}
            />              
        </>
    )   
}


const AddClients = () => {


    const navigate = useNavigate()

    const initialForm = 
        {  
            id: 1,
            cuil: "",
            nombre: "",
            telefono: "",
            correo: "",
        }

    const [body, handleChange] = useForm(initialForm)

    const peticionPost = async (e) =>{
        e.preventDefault()
        console.log("body despues", body);

        await axios.post(urlClientes, body)
          .then(response =>{ 
            console.log(body);
            console.log("Todo OK");
            navigate('/clients')
          }
          )
      }
    return (
    <Container>
        <Row>
            <Col sm={3} className = "bg">
                <SideBar name = "Maria Garcia" job = "Secretaria de Comercializacion" />
            </Col>
            <Col sm={9} className = "mb-101">
            <h1 style={{marginTop: "20px"}}>Agregar Nuevo Cliente</h1>
                    <form action="">
                        <h3 className = "info-propiedad">Cliente Informacion</h3>

                        <div className="form2">

                        <table>
                            <thead>
                                {/* <tr>
                                    <th></th>
                                    <th></th>
                                </tr> */}
                            </thead>
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="">Nombre y Apellido</label></td>
                                        <td>
                                            <InputText 
                                                name = "nombre"
                                                handleChange={handleChange}
                                                placeholder = "Nombre y Apellido"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="">CUIL*:</label></td>
                                        <td>
                                            <InputText 
                                                name = "cuil"
                                                handleChange={handleChange}
                                                placeholder = "CUIL"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="">Telefono:</label></td>
                                        <td>
                                            <InputText 
                                                label = "Telefono: "
                                                name = "telefono"
                                                handleChange={handleChange}
                                                placeholder = "Telefono"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="">Correo: </label></td>
                                        <td>                            
                                            <InputText 
                                                type = "email"
                                                name = "correo"
                                                handleChange={handleChange}
                                                placeholder = "Correo"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>




                        </div>
                        <div className="buttons">
                            <Button color="success" variant="contained" onClick = {peticionPost} className="button">
                                Agregar Cliente
                            </Button>
                            <Link to = "/clients">
                                <Button color="error" variant="contained">
                                    Cancelar
                                </Button>
                            </Link>
                        </div>
                    </form>
            </Col>
        </Row>
    </ Container>
  )
}
export default AddClients