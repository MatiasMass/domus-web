import React, {useState} from 'react'
import {Container, Row, Col, Form} from  'react-bootstrap'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, Box} from '@mui/material'
import { Link } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import clientesAPI from '../../../clientes'

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
  

const AddPropiedades = () => {

    const [clientes, setClientes] = useState(clientesAPI)
    const [date, setDate] = React.useState(dayjs('2022-08-18'));
    const [cliente, setCliente] = React.useState(clientes[0].dni);
    const [amueblado, setAmueblado] = React.useState('No');
    const [tipo, setTipo] = useState("Alquiler")
    const [modalInsertar, setModalInsertar] = useState(false)
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)

    const [consolaSeleccionada, setConsolaSeleccionada] = useState(
        {
          "id": 1,
          "codPropiedad": "",
          "medidas": "",
          "antiguedad": null,
          "amueblado": false,
          "cantHabitaciones": 31,
          "servicios": null,
          "descripcion": "Sin descricion",
          "disponibilidad": true,
          "tipo": "VENTA",
          "precio": 1,
          "direccion": {
            "id": 1,
            "provincia": "No especificado",
            "ciudad": "No especificado",
            "numero": "1",
            "barrio": null,
            "piso": null,
            "depto": null
          },
          "fotos": []
        })
  
      const handleChangeDate = (event) =>{
        setDate(event)
      }
  
  
      const handleChange = (event) =>{
        // e.preventDefaul()
        const name = event.target.name
        const value = event.target.value
        setConsolaSeleccionada(prevState =>({
          ...prevState,
          [name]: value
        }))
        console.log(consolaSeleccionada);
        consolaSeleccionada.antiguedad = date
        console.log(event);
        if (event.target.name === "amueblado"){
          setAmueblado(event.target.value)
        }else if (event.target.name === "tipo"){
          setTipo(event.target.value)
        }else if (event.target.name === "cliente"){
          setCliente(event.target.value)
        }
        
      }
  
     

      
    // const [clientes, setClientes] = useState(clientesAPI)
    const agregarCliente = ()=>{
        clientesAPI = clientesAPI.push(
            {id: clientesAPI.length + 1,
                dni: 4555555,
                nombre: "Carlos",
                apellido: "De la villa",
                fecha: "19/10/1995",
                telefono: "55-555-55",
                direccion: "Zacarias  Sanchez 55",
                correo: "Correo@gmail.com",
                tipoCliente: "Propietario",
                estado: "activo"
            },
        )
    }

    return (
    <Container>
        <Row>
            <Col sm={3} className = "bg" style= {{height: "100vh"}}>
                <SideBarRealEstate name = "Clara" job = "Agente Inmobiliario" />
            </Col>
            <Col sm={9}>
                <h3 style={{fontSize: 20, textAlign: "center"}}>Agregar Nueva Propiedad</h3>
                {/* <Box sx = {style}> */}
                <Row className='mt-5'>
                    <Col sm={4}>
                        <Form.Label htmlFor="disabledTextInput">Codigo de Propiedad</Form.Label>
                        <TextField 
                            label = "Codigo Propiedad" 
                            name  = "codPropiedad" 
                            onChange={handleChange} 
                            required
                        />
                    </Col>
                    <Col sm={4}>
                        <Form.Label htmlFor="disabledTextInput">Codigo de Propiedad</Form.Label>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Elegir Cliente"
                            required
                            name = "cliente"
                            value={cliente}
                            onChange={handleChange}
                            helperText="Por favor elija un cliente"
                        >
                            {clientesAPI.map((cliente) => (
                            <MenuItem key={cliente} value={cliente}>
                                {cliente.dni} - {cliente.nombre} {cliente.apellido}
                            </MenuItem>
                            ))}
                        </TextField>
                    </Col>
                    <Col sm={4}>
                        <Form.Label htmlFor="disabledTextInput">Codigo de Propiedad</Form.Label>

                        <TextField
                            id="outlined-number"
                            required
                            label="Cantidad Habitaciones"
                            type="number"
                            name = "cantHabitaciones"
                            onChange={handleChange}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Col>
                </Row>
                
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Amueblado"
                        required
                        name = "amueblado"
                        value={amueblado}
                        onChange={handleChange}
                        helperText="Seleccione una opcion"
                      >
                        <MenuItem value={true}>Si</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </TextField>
                      <br />
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                          label="Años de Antiguedad"
                          inputFormat="DD/MM/YYYY"
                          value={date}
                          name = "antiguedad"
                          onChange={handleChangeDate}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      <br />
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Tipo"
                        name = "tipo"
                        value={tipo}
                        required
                        onChange={handleChange}
                        helperText="Seleccione una opcion"
                      >
                        <MenuItem value="ALQUILER">ALQUILER</MenuItem>
                        <MenuItem value="VENTA">VENTA</MenuItem>
                      </TextField>
                      <br />
                      <TextField
                        id="outlined-number"
                        label="Precio $"
                        type="number"
                        name = "precio"
                        required
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <br />
                      {/* <Button variant="outlined" onClick = {abrirCerrarModalInsertar}>Cerrar</Button>
                      <Button variant="contained" onClick={peticionPost} >Guargar Cambios</Button> */}
                    {/* </Box>
                     */}
                    <Row>
                        <div className="buttons">
                        <Button variant="success" onClick = {agregarCliente}>
                            {/* <Nav defaultActiveKey="/home" className="flex-column text-start"> */}
                            <Link
                                to="/clients"
                                style={{ color: "#fff", textDecoration: "none" }}>
                                Agregar Cliente
                            </Link>
                            {/* </Nav> */}
                        </Button>
                        <Button className='bg-danger'>Cancelar</Button>            
                        </div>
                    </Row>
            </Col>
        </Row>
    </ Container>
  )
}
export default AddPropiedades