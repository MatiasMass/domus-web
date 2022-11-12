import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import SideBar from "../../../layout/SideBar";
import calendary from "../../../assets/calendary.jpeg";

const AddEvents = () => {
  return (
    <div className="bg-">
      <Row>
        <Col sm={3} className="bg">
          <SideBar name="Maria Garcia" job="Secretaria de Comercializacion" />
        </Col>
        <Col sm={9}>
          <div className="w-100 d-flex mt-5">
            <div className="w-75">
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Nombre del Cliente</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Cliente" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Direccion del Inmueble</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Direccion" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Direccion" />
              </Form.Group>

              <Form.Group className="" controlId="">
                <Form.Label>Tipo Evento</Form.Label>
                <Form.Select>
                  <option>Cita</option>
                  <option>Reclamo</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="" controlId="">
                <Form.Label>Detalle</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Detalle"
                  className="mb-3"
                >
                  <Form.Control as="textarea" placeholder="Ingrese Detalle" />
                </FloatingLabel>
              </Form.Group>

              <div className="buttons">
                <Button className="bg-success" style={{ margin: "0px 5px" }}>
                  Confirmar
                </Button>
                <Button className="bg-danger">Cancelar</Button>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Fecha y Hora</Form.Label>
              <div>
                <img src={calendary} style={{ width: "75%" }} alt="" />
              </div>
            </Form.Group>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default AddEvents;
