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
            <Col sm={3} className = "bg" style= {{height: "105vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}> 
              {data.cantHabitaciones}
            </Col>
        </Row>
    </ Container>
  )
}

export default Estates