import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import SideBarRealEstate from "../../../layout/SideBarRealEstate";
import "../RealEstateAgent.css";

const CustomCard = ({ name, total }) => {
  return (
    <Card border="primary" style={{ width: "18rem", margin: "1rem" }}>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>{total}</Card.Title>
      </Card.Body>
    </Card>
  );
};

const url = "http://localhost:3000/api/propiedades"


const RealEstateAgent = () => {

  const [propiedades, setPropiedades] = useState([])

  const getPropiedades = async () =>{
      
      // console.log(url);
      try {
        const response = await axios.get(url)
          if (response?.status === 200){
            const initialPropideades = response.data
            // console.log(initialPropideades);
            setPropiedades(initialPropideades)
            return
          }
      } catch (error) {
        console.error(error.message);
        // alert("The country doesn't exist")
        // ref.current = `${error.mes            setError(false)sage}`
      }
  
    }

    useEffect(() => {
      getPropiedades()
      
    }, [])
    console.log(propiedades);
  return (
    <Container>
      <Row className="vw-100" stlye={{ height: "vw-100" }}>
        <Col sm={3} className="bg">
          <SideBarRealEstate name="Clara" job="Agente Inmubiliario" />
        </Col>
        <Col sm={9} className="mb-101">
          <h1 className="mt-5">Bienvenida Agente Inmobiliario</h1>
          <div className="d-flex flex-wrap justify-content-center mt-5">
            <CustomCard name="Clientes" total="20" />
            <CustomCard name="Propiedades" total={propiedades.length} />
            <CustomCard name="Eventos" total="3" />
          </div>
          <button className = "btn btn-success" onClick= {getPropiedades}>Click me</button>

        </Col>
      </Row>
    </Container>
  );
};

export default RealEstateAgent;
