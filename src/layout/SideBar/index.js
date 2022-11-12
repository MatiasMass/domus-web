import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../../assets/loginm.png";
import "./SideBar.css";
import { Link } from "react-router-dom";

export const SideBar = ({ name = "Maria Garcia", job }) => {
  return (
    <>
      <div className="profile">
        <img src={logo} alt="" className="logo" />
        <h2>{name}</h2>
        <hr />
        <p className="center">{job}</p>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column text-start">
        <Link eventKey="link-2" to="/secretary" className="url pt-1">
          <span className="ms-3"> Inicio</span>
        </Link>
        <Link eventKey="link-2" to="/clients" className="url pt-1">
          <span className="ms-3"> Clientes</span>
        </Link>
        <Link eventKey="link-2" to="/events" className="url pt-1">
          <span className="ms-3"> Eventos</span>
        </Link>
        <Nav.Link eventKey="link-3" className="url" href="/">
          Cerrar Sesion
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SideBar;
