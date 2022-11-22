import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from  'react-bootstrap'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "./index.css" 
import {useParams} from 'react-router-dom'


const Estates = () => {
    const {id} = useParams()

    const [data, setData] = useState([])

    const getPropiedad = async () =>{
        
        try {
          const response = await axios.get(`http://localhost:8000/api/propiedades/${id}`)
            if (response?.status === 200){
              const initialPropidead = response.data
              setData(initialPropidead)
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



  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "100vh"}}>
            <Col sm={3} className = "bg" style= {{height: "118vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}> 
              <h1>Propiedad #{data.codPropiedad}</h1>
              {/* {data.cantHabitaciones} */}
              <div className="img-container">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" alt="" />
              </div>
              <div className="info-container">
                <ul>
                  <li>Antiguedad: {data.antiguedad}</li>
                  <li>Amueblado: {data.amueblado ? "Si" : "No"}</li>
                  <li>Cantidad Habitaciones: {data.cantHabitaciones}</li>
                  <li>Descripcion: {data.descripcion ? data.descripcion : "Sin descripcion"}</li>
                  <li>Servicios: {data.servicios ? "Si" : "No"}</li>
                  <li>Disponibilidad: {data.disponibilidad ? "Si" : "No"}</li>
                  <li>
                    Direccion:
                    <ul>
                      {console.log(data.direccion)}
                      {data.direccion ? 
                        <>
                          <li>Provincia: {data.direccion.provincia}</li>
                          <li>Ciudad: {data.direccion.ciudad}</li>
                          <li>Numero: {data.direccion.numero}</li>
                          <li>Barrio: {data.direccion.barrio}</li>
                          <li>Piso: {data.direccion.piso}</li>
                          <li>Depto: {data.direccion.depto}</li>
                        </>
                        :
                        <>
                          <p>Cargando...</p>
                        </>
                      }
                    </ul>
                  </li>
                </ul>
              </div>
            </Col>
        </Row>
    </ Container>
  )
}

export default Estates