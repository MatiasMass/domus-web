import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Form} from  'react-bootstrap'
import {Button} from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import clientesAPI from '../../../clientes'
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

const AddPropiedades = () => {

    const {id} = useParams()

    const [data, setData] = useState({})
    const [initialForm, setInitialForm] = useState({})

    const getPropiedad = async () =>{
        try {
          const response = await axios.get(`http://localhost:8000/api/propiedades/${id}`)
            if (response?.status === 200){
              const initialPropiedad = response.data
              setData(initialPropiedad)

              return
            }
        } catch (error) {
          console.error(error.message);
          // alert("The country doesn't exist")
          // ref.current = `${error.mes            setError(false)sage}`
        }
      }

    useEffect(() => {
      getPropiedad()
    }, [])

    console.log(data);

    const navigate = useNavigate()

    // const initialForm = {}

    // const initialForm = 
    // {
    //     "codPropiedad": "EQWE7894",
    //     "medidas": "",
    //     "antiguedad": null,
    //     "amueblado": false,
    //     "cantHabitaciones": 10,
    //     "servicios": null,
    //     "descripcion": "propiedad 3",
    //     "disponibilidad": true,
    //     "tipo": "CASA",
    //     "precio": 300,
    //     "direccion": {
    //         "id": 3,
    //         "provincia": "CORRIENTES",
    //         "ciudad": "CAPITAL",
    //         "numero": "789",
    //         "barrio": null,
    //         "piso": null,
    //         "depto": null
    //     },
    //         "cliente": {
    //         "id": 1,
    //         "cuil": "20-15100200",
    //         "nombre": "JUAN PEREZ",
    //         "correo": null,
    //         "telefono": null
    //     },
    //     "fotos": []
    //     }
    
    // console.log(data);
    // if (data){
    //     setInitialForm(data)
    // }
    console.log("data", data);
    const [body, handleChange] = useForm(data)

    console.log("body", body);
    const peticionUpdate = async (e) =>{
        e.preventDefault()
        console.log(body);
        console.log(url + data.id);
        await axios.put(url + data.id, body)
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
                    <h1 style={{marginTop: "20px"}}>Editar Propiedad #{data.codPropiedad}</h1>
                    <form action="">
                        <h3 className = "info-propiedad">Propiedad Informacion</h3>
                        <div className="form">
                            {data 
                                ? 
                                <>
                        
                                <div className="inner-container">
                                    <label htmlFor="">Codigo de Propiedad</label>
                                    <input 
                                        type="text" 
                                        placeholder={`${body.codPropiedad}`}
                                        readOnly
                                        value={body.codPropiedad}
                                    />
                                </div>
                                <div className="inner-container">
                                    <label htmlFor="">Cantidad de Habitaciones</label>
                                    <input 
                                        type="number"
                                        min="1"
                                        placeholder='Cantidad Habitaciones' 
                                        onChange={handleChange} 
                                        name = "cantHabitaciones"
                                        value = {body.cantHabitaciones}
                                    />
                                </div>
                                <div className="inner-container">
                                    <label htmlFor="">Amueblado</label>
                                    <select 
                                        name="amueblado"
                                        onChange={handleChange}
                                        value={body.amueblado}
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
                                        onChange={handleChange}
                                        value={body.tipo}
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
                                        onChange={handleChange}
                                        value={body.servicios}
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
                                        value={body.precio}
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
                                </>
                                :
                                    "Cargando..."
                            }
                            
                        </div>
                        <h3>Direccion Informacion</h3>
                        <div className="form">
                            {body.direccion 
                            
                            ?
                            <>
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
                            </>
                            : 
                                "Cargando ..."
                            }
                        </div>
                        <div className="buttons">
                            <Button color="success" variant="contained" onClick = {peticionUpdate} >
                                Guardar Propiedad
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