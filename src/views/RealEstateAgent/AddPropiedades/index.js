import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Form} from  'react-bootstrap'
import {Button} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import axios from 'axios'
import {useForm} from '../../../hooks/useForms'
import './index.css'

const urlPropiedades = "http://localhost:8000/api/propiedades/"
const urlClientes = "http://localhost:8000/api/clientes/"
const urlDirecciones = "http://localhost:8000/api/direcciones/"

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const InputText = ({label, name, placeholder, value = "", handleChange, read = false}) =>{
    return(
        <div className="inner-container">
            <label htmlFor="">{label}</label>
            <input 
                name = {name}
                type = "text"
                defaultValue = {value}
                onChange = {handleChange}
                placeholder={placeholder}
                readOnly = {read}
            />
        </div>
    )   
}

const InputImage = () =>{
    return(
        <div className="inner-container">
            <label htmlFor="">Cargar Imagen</label>
            <input 
                type="file"
                id="avatar" 
                name="avatar"
                accept="image/png, image/jpeg"
            />
        </div>
    )
}

const InputNumber = ({label, name, value, placeholder,handleChange, min = "1"}) =>{
    return(
        <div className="inner-container">
            <label htmlFor="">{label}</label>
            <input 
                name = {name}
                type = "number"
                defaultValue = {value}
                onChange = {handleChange}
                placeholder={placeholder}
                min = {min}
            />
        </div>
    )   
}

const Select = ({data, label, name, handleChange, options}) =>{
    return(
    <div className="inner-container">
        <label htmlFor="">{label}</label>
        <select 
            name = {name}
            value = {data}
            onChange = {handleChange}
        >
            {options.map(option => {
                return(
                    <option value = {option.valor}>{option.data}</option>
                )
            })}
        </select>
    </div>
    )
}

const SelectClientes = ({data, label, name, handleChange, options}) =>{
    return(
    <div className="inner-container">
        <label htmlFor="">{label}</label>
        <select 
            name = {name}
            value = {data}
            onChange = {handleChange}
        >
            {options.map(option => {
                return(
                    <option value = {option.cuil}>{option.cuil} {">"} "{option.nombre}"</option>
                )
            })}
        </select>
    </div>
    )
}


const TextArea = ({data, handleChange}) =>{
    return(
        <div className="inner-container textarea">
            <label htmlFor="">Descripcion</label>
            <textarea 
                name="descripcion" 
                cols="30" 
                rows="30"
                defaultValue = {data}
                onChange = {handleChange}
            >
            </textarea>
        </div>
    )
}

const DateInput = ({value, handleChange}) =>{
    return(
        <div className="inner-container">
            <label htmlFor="">Antiguedad: </label>
            <input 
                type="date" 
                name = "antiguedad"
                value = {value}
                onChange = {handleChange}
            />
        </div>
    )
}

const AddPropiedades = () => {

    const [clientes, setClientes] = useState([])
    const [amueblado, setAmueblado] = useState([
        {
            valor: true,
            data: "Si"
        },
        {
            valor: false,
            data: "No"
        }]
    )
    const [tipo, setTipo] = useState([
        {
            valor: "ALQUILER",
            data: "ALQUILER"
        },
        {
            valor: "VENTA",
            data: "VENTA"
        },
        {
            valor: "OFICINA",
            data: "OFICINA"
        }]
    )
    const [servicios, setServicios] = useState([
        {
            valor: true,
            data: "Con servicios"
        },
        {
            valor: false,
            data: "Sin servicios"
        },]
    )
    const [disponibilidad, setDisponibilidad] = useState([
        {
            valor: true,
            data: "Si"
        },
        {
            valor: false,
            data: "No"
        },]
    )
    const navigate = useNavigate()


    const initialForm = 
            {
                "id": 1,
                "codPropiedad": randomString(6, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                "medidas": "",
                "antiguedad": null,
                "amueblado": false,
                "cantHabitaciones": 1,
                "servicios": null,
                "descripcion": "",
                "disponibilidad": true,
                "tipo": "ALQUILER",
                "precio": 1,
                "direccion": {
                    "id": 1,
                    "provincia": "",
                    "ciudad": "",
                    "numero": "",
                    "calle": "",
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

    const [body, handleChange] = useForm(initialForm)
    console.log("body antes", body);

    const peticionPost = async (e) =>{
        e.preventDefault()

        if (body.provincia){
            delete body.provincia
        }
        if (body.ciudad){
            delete body.ciudad
        }
        if (body.numero){
            delete body.numero
        }
         if (body.barrio){
            delete body.barrio
        } if (body.piso){
            delete body.piso
        } if (body.depto){
            delete body.depto
        }
        if (body.clientes){
            delete body.clientes
        }

        console.log("body despues", body);

        await axios.post(urlPropiedades, body)
          .then(response =>{ 
            console.log(body);
            console.log("Todo OK");
            navigate('/estates')
            alert("Se ha agregado con exito la propiedad")
          }
          )
      }

    useEffect(() => {
        getClientes()
    }, [])
    

    return (
    <Container>
        <Row>
            <Col sm={3} className = "bg" style= {{height: "140vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}>
                <Row>
                    <h1 style={{marginTop: "20px"}}>Agregar Nueva Propiedad</h1>
                    <form action="">
                        <h3 className = "info-propiedad">Propiedad Informacion</h3>

                        <div className="form">
                            <InputText 
                                label = "Codigo de Propiedad"
                                name = "codPropiedad"
                                value= {body.codPropiedad}
                                placeholder = "CP"
                                read = {true}
                            />
                            
                            <InputNumber 
                                label = "Cantidad de Habitaciones"
                                value = {body.cantHabitaciones}
                                placeholder='Cantidad Habitaciones'
                                name = "cantHabitaciones"
                                handleChange={handleChange} 
                            />
                            
                            <DateInput
                                value = {body.antiguedad}
                                handleChange = {handleChange}
                            />

                            <Select 
                                label = "Amueblado"
                                name = "amueblado"
                                value = {body.amueblado}
                                handleChange = {handleChange}
                                options = {amueblado}
                            />

                            {console.log("cliente", body.cliente)}
                            
                            <SelectClientes
                                label = "Cliente"
                                name = "clientes"
                                value = {body.cliente.cuil}
                                handleChange = {handleChange}
                                options = {clientes}
                                // setId = {setId}
                            />

                            <Select 
                                label = "Tipo"
                                name = "tipo"
                                value = {body.tipo}
                                handleChange = {handleChange}
                                options = {tipo}
                            />
                        
                            <Select 
                                label = "Servicios"
                                name = "servicios"
                                value = {body.servicios}
                                handleChange = {handleChange}
                                options = {servicios}
                            />

                            <Select 
                                label = "Disponibilidad"
                                name = "disponibilidad"
                                value = {body.disponibilidad}
                                handleChange = {handleChange}
                                options = {disponibilidad}
                            />

                            <InputNumber
                                label = "Precio"
                                placeholder = "Precio $"
                                handleChange = {handleChange}
                                name = "precio"
                            />

                            <InputImage />

                            <TextArea 
                                value = {body.descripcion}
                                handleChange = {handleChange}
                            />                      
                        </div>
                        <h3>Direccion Informacion</h3>
                        <div className="form">
                            <InputText 
                                label = "Provincia"
                                name = "provincia"
                                value= {body.direccion.provincia}
                                placeholder = "Provincia"
                                handleChange = {handleChange}
                            />

                            <InputText 
                                label = "Ciudad"
                                name = "ciudad"
                                value= {body.direccion.ciudad}
                                placeholder = "Ciudad"
                                handleChange = {handleChange}
                            />

                            <InputText 
                                label = "Barrio"
                                name = "barrio"
                                value= {body.direccion.barrio}
                                placeholder = "Barrio"
                                handleChange = {handleChange}
                            />

                            <InputText 
                                label = "Calle"
                                name = "calle"
                                value= {body.direccion.calle}
                                placeholder = "Calle"
                                handleChange = {handleChange}
                            />


                            <InputNumber 
                                label = "Numero"
                                value = {body.direccion.numero}
                                placeholder='Cantidad Habitaciones'
                                name = "cantHabitaciones"
                                handleChange={handleChange} 
                            />

                            <InputText 
                                label = "Piso"
                                name = "piso"
                                value= {body.direccion.piso}
                                placeholder = "Piso"
                                handleChange = {handleChange}
                            />

                            <InputText 
                                label = "Depto"
                                name = "depto"
                                value= {body.direccion.depto}
                                placeholder = "Depto"
                                handleChange = {handleChange}
                            />

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