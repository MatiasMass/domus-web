import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from  'react-bootstrap'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "./index.css" 
import {useParams} from 'react-router-dom'
// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WeekendIcon from '@mui/icons-material/Weekend';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import InfoIcon from '@mui/icons-material/Info';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import DirectionsIcon from '@mui/icons-material/Directions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Filter1Icon from '@mui/icons-material/Filter1';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';

const Estates = () => {
    const {id} = useParams()

    const [data, setData] = useState({})

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

    console.log(data);

  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "100vh"}}>
            <Col sm={3} className = "bg" style= {{height: "142vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}>
              <div className="outer-container">
                <div className="content-container">
                  <h1>Propiedad #{data.codPropiedad}</h1>
                  {/* {data.cantHabitaciones} */}
                  <div className="img-container">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" alt="" />
                  </div>
                  <div className="info-container">
                    <ul className='principal'>
                      <li><AccountCircleIcon /> Cliente: {data.cliente ? data.cliente.nombre : ""} - CUIL: {data.cliente ? data.cliente.cuil : ""}</li>
                      <li><HomeIcon /> Tipo: {data.tipo}</li>
                      <li><AttachMoneyIcon /> Precio: {data.precio}</li>
                      <li><DateRangeIcon /> Antiguedad: {data.antiguedad}</li>
                      <li><WeekendIcon /> Amueblado: {data.amueblado ? "Si" : "No"}</li>
                      <li><BedroomChildIcon /> Cantidad Habitaciones: {data.cantHabitaciones}</li>
                      <li><InfoIcon /> Descripcion: {data.descripcion ? data.descripcion : "Sin descripcion"}</li>
                      <li><ElectricalServicesIcon /> Servicios: {data.servicios ? "Si" : "No"}</li>
                      <li><CheckCircleIcon /> Disponibilidad: {data.disponibilidad ? "Si" : "No"}</li>
                      <li>
                      <DirectionsIcon /> Direccion:
                        <ul className='secundary'>
                          {data.direccion ? 
                            <>
                              <li><EmojiTransportationIcon /> Provincia: {data.direccion.provincia}</li>
                              <li><LocationCityIcon /> Ciudad: {data.direccion.ciudad}</li>
                              <li><Filter1Icon /> Numero: {data.direccion.numero}</li>
                              <li><HomeWorkIcon /> Barrio: {data.direccion.barrio}</li>
                              <li><AddRoadIcon /> Calle: {data.direccion.calle}</li>
                              <li><CalendarViewWeekIcon /> Piso: {data.direccion.piso}</li>
                              <li><ApartmentIcon /> Depto: {data.direccion.depto}</li>
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
                </div>
              </div>
            </Col>
        </Row>
    </ Container>
  )
}

export default Estates