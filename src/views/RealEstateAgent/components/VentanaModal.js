import {Row, Col} from  'react-bootstrap'
// Ventana modal
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const VentanaModal = ({show, handleClose, handleChange, handleShow, clientes, peticiones, texto}) =>{
    return(
        <>
        <Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{texto}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Codigo de la Propiedad</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Codigo propiedad"
                    autoFocus
                    name = "codPropiedad"
                    onChange = {handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Clientes</Form.Label>
                  <Form.Select name = "clientes" onChange = {handleChange}>
                    {clientes.map(cliente => {
                      return(
                        <option value = {cliente}>{cliente}</option>
                      )
                      })}
                  </Form.Select>
                </Form.Group>

                {/*  */}
                <Row>
                  <Col sm={6} >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Cantidad habitaciones</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Cantidad habitaciones"
                        autoFocus
                        min="1"
                        name = "cantHabitaciones"
                        onChange = {handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Antiguedad</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Años de antiguedad"
                        autoFocus
                        min="1"
                        name = "antiguedad"
                        onChange = {handleChange}
                      />

                    </Form.Group>
                  </Col>
                </Row>
                
                {/*  */}
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Amueblado</Form.Label>
                      <Form.Select name="amueblado" onChange = {handleChange}>
                          <option value="1">Si</option>
                          <option value="0">No</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Tipo</Form.Label>
                      <Form.Select name = "tipo" onChange = {handleChange}>
                          <option value="venta">Venta</option>
                          <option value="alquiler">Alquiler</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {/*  */}
                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Disponibilidad</Form.Label>
                      <Form.Select name = "disponibilidad"> onChange = {handleChange}
                          <option value="1">Disponible</option>
                          <option value="0">No disponible</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="$"
                        autoFocus
                        min="1"
                        name = "precio"
                        onChange = {handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/*  */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Descripcion de la propiedad</Form.Label>
                  <Form.Control as="textarea" rows={3} name = "descripcion" onChange = {handleChange}/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="success" onClick={peticiones}>
                Guardar cambios
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </>
    )
}

export default VentanaModal;