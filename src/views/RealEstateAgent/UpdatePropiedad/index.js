import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Form} from  'react-bootstrap'
import {Button} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import './index.css'
import axios from 'axios'
import {useForm} from '../../../hooks/useForms'
import {useParams} from 'react-router-dom'

const url = "http://localhost:8000/api/propiedades/"

function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

const urlPropiedades = "http://localhost:8000/api/propiedades/"
const urlClientes = "http://localhost:8000/api/clientes/"
const urlDirecciones = "http://localhost:8000/api/direcciones/"

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
    const [body, setBody] = useState( {
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
    })
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
    const {id} = useParams()
    // const [data, setData] = useState({})
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

    
 

    const handleChange = (e) =>{
        setBody({
            ...body,
            [e.target.name] : e.target.value
        })
      }

        const getPropiedad = async () =>{
          try {
            const response = await axios.get(`http://localhost:8000/api/propiedades/${id}`)
              if (response?.status === 200){
                const initialPropiedad = response.data
                setBody(initialPropiedad)
                console.log("Cargo...");
                console.log("Propiedades", initialPropiedad);
                return
              }
          } catch (error) {
            console.error(error.message);
          }
        }

      const peticionUpdate = async (e) =>{
        e.preventDefault()
        console.log(body);
        await axios.put(urlPropiedades + body.id, body)
        .then(response =>{ 
            console.log("Todo OK");
            navigate('/estates')
            alert("Se ha modificado con exito la propiedad")
          }
          )
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

    useEffect(() => {
        getPropiedad()
        getClientes()
      }, [])
  
    // const [body, handleChange] = useForm(data)
    // console.log("data", data);
    // console.log("body", body);

      return (
        <Container>
            <Row>
                <Col sm={3} className = "bg" style= {{height: "140vh"}}>
                    <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
                </Col>
                <Col sm={9}>
                    <Row>
                        <h1 style={{marginTop: "20px"}}>Modificar Propiedad {body.codPropiedad}</h1>
                        {body 
                        
                            ?
                    
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
                                        // value = {body.cliente.cuil ? body.cliente.cuil : ""}
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
                                        value = {body.precio}
                                        name = "precio"
                                    />
        
                                    <TextArea 
                                        value = {body.descripcion}
                                        handleChange = {handleChange}
                                    />                      
                                </div>
                                <h3>Direccion Informacion</h3>
                                <div className="form">
                                    {body.direccion 
                                    
                                    ?
                                    <>
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
                                    </>
                                    :
                                        "Cargando..."
                                    }
        
                                </div>
                                <div className="buttons">
                                    <Button color="success" variant="contained" onClick = {peticionUpdate} className="button">
                                        Guardar Propiedad
                                    </Button>
                                    <Link to = "/estates">
                                        <Button color="error" variant="contained">
                                            Cancelar
                                        </Button>
                                    </Link>
                                </div>
                            </form>

                            :

                                <p>Cargando...</p>
                    
                        }
                    </Row>
                </Col>
            </Row>
        </ Container>
      )
}
export default AddPropiedades