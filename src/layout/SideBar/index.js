import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../../assets/loginm.png";
import "./SideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {closeSesion} from "../../redux/reducers/userReducer";

export const SideBar = ({ name = "Maria Garcia", job }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = (e) =>{
    e.preventDefault()
    dispatch(closeSesion())
    navigate('/')
  }

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
        <Nav.Link eventKey="link-3" className="url" onClick={handleLogout}>
          Cerrar Sesion
        </Nav.Link>
      </Nav>
    </>
  );
};

export default SideBar;
