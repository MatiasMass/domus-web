import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from  'react-bootstrap'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, Box} from '@mui/material'
import {Link} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';

import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "./Estates.css" 

const url = "http://localhost:8000/api/propiedades/"

const style = {
  position: 'absolute',
  overflow: "auto",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};


const styleModalCerrar = {
  position: 'absolute',
  overflow: "auto",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
};

const Estates = () => {
    const [data, setData] = useState([])
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)

    const [consolaSeleccionada, setConsolaSeleccionada] = useState({})

    const getPropiedades = async () =>{
        
        try {
          const response = await axios.get(url)
            if (response?.status === 200){
              const initialPropideades = response.data
              setData(initialPropideades)
              return
            }
        } catch (error) {
          console.error(error.message);
          // alert("The country doesn't exist")
          // ref.current = `${error.mes            setError(false)sage}`
        }
    
      }
      
      const abrirCerrarModalEditar = () =>{
        setModalEditar(!modalEditar)
      }
      
      const abrirCerrarModalEliminar = () =>{
        setModalEliminar(!modalEliminar)
      }

      const seleccionarConsola=(consola, caso)=>{
        setConsolaSeleccionada(consola);
        (caso==='Editar') ? abrirCerrarModalEditar(): abrirCerrarModalEliminar()
      }



      const peticionPut=async()=>{
        console.log(consolaSeleccionada);
        await axios.put(url+consolaSeleccionada.id, consolaSeleccionada)
        .then(response=>{
          let dataNueva=data;
          dataNueva.map(consola=>{
              if (consolaSeleccionada.id === consola.id){
                consola.codPropiedad = consolaSeleccionada.codPropiedad;
                consola.antiguedad = consolaSeleccionada.antiguedad;
                consola.cantHabitaciones = consolaSeleccionada.cantHabitaciones;
                consola.tipo = consolaSeleccionada.tipo;
                consola.disponibilidad = consolaSeleccionada.disponibilidad;
                consola.precio = consolaSeleccionada.precio;
              }
          })
          setData(dataNueva);
        })
        abrirCerrarModalEditar();
      }

      const peticionDelete=async()=>{
        await axios.delete(url+consolaSeleccionada.id)
        .then(response=>{
          setData(data.filter(consola=>consola.id!==consolaSeleccionada.id));
          console.log(data);
        })
        abrirCerrarModalEliminar();
        alert("Se ha eliminado con exito la propiedad")
      }

    useEffect(() => {
      getPropiedades()
    }, [])



  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "100vh"}}>
            <Col sm={3} className = "bg" style= {{height: "100vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}> 
                <h1 className='' style={{margin: "20px 0"}}>Propiedades</h1>
                {/* <Button  variant="contained" onClick = {abrirCerrarModalInsertar}>Agregar Propiedad</Button>                 */}
                <Link to = "/addpropiedades">
                  <Button variant="contained" color="success">
                    Agregar Propiedad
                  </Button>
                </Link>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableCell></TableCell>
                      <TableCell>Codigo Propiedad</TableCell>
                      <TableCell>Cliente</TableCell>
                      <TableCell>Antiguedad</TableCell>
                      <TableCell>Amueblado</TableCell>
                      <TableCell>Cantidad Habitaciones</TableCell>
                      <TableCell>Tipo</TableCell>
                      <TableCell>Disponibilidad</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell></TableCell>
                    </TableHead>
                    <TableBody>
                      {data.map(consola => {
                        return(
                          <TableRow key = {consola.id}>
                            <TableCell>
                              <Box sx = {{cursor: "pointer"}}>
                                <Link to={`/propiedad/${consola.id}`}>
                                  <OpenInNewIcon color='secondary' />
                                </Link>
                              </Box>
                            </TableCell>
                            <TableCell>{consola.codPropiedad}</TableCell>
                            <TableCell>{consola.cliente.cuil}</TableCell>
                            <TableCell>{(consola.antiguedad !== null)? consola.antiguedad: "No especificado"}</TableCell>
                            <TableCell>{(consola.amueblado === true)? "SI" : "NO" }</TableCell>
                            <TableCell>{consola.cantHabitaciones}</TableCell>
                            <TableCell>{consola.tipo}</TableCell>
                            <TableCell>{(consola.disponibilidad !== true)? "SI" : "NO" }</TableCell>
                            <TableCell>{typeof consola.precio === 'string' ?  parseFloat(consola.precio) : consola.precio }</TableCell>
                            <TableCell>
                              <Box sx = {{cursor: "pointer"}}>
                                <Link to={`/editar/${consola.id}`}>
                                  <EditIcon color='primary' />
                                </Link>
                              </Box>
                              &nbsp;&nbsp;&nbsp;
                              <Box sx = {{cursor: "pointer"}}>
                                <DeleteIcon 
                                  color="error"
                                  onClick={()=>seleccionarConsola(consola, 'Eliminar')} 
                                />
                              </Box>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              <Modal 
                open = {modalEliminar}
                close = {abrirCerrarModalEliminar}>
                  <>
                    <Box sx = {styleModalCerrar}>
                      <p>Estas seguero que deseas eliminar {consolaSeleccionada &&  consolaSeleccionada.codPropiedad} ?</p>
                      <Box sx = {{display: "flex", flexDirection: "row", gap: 1}}>
                        <Button variant="outlined" onClick = {abrirCerrarModalEliminar}>Cancelar</Button>
                        <Button color="error" variant="contained" onClick={()=>peticionDelete()} >Aceptar</Button>
                      </Box>
                    </Box>
                  </>
              </Modal>             
            </Col>
        </Row>
    </ Container>
  )
}
export default Estates