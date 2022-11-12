import * as React from "react";
import "./PropertyCard.css";

//components
import { Button } from "../../components/atomics";

const PropertyCard = ({ name, price, type }) => {
  return (
    <div className="card-container mx-3 mb-4">
      <img
        src="https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg"
        alt="house"
        className="property-image"
      />
      <div className="bubble-container">
        <p className="price-bubble">{price}</p>
        <p className="type-bubble">{type}</p>
      </div>
      <p className="fw-bold fs-4 px-3">{name}</p>
      <div className="ms-3">
        <p>
          <span className="fw-bold">248</span> m2 totales
        </p>
        <p>
          <span className="fw-bold">4</span> ambientes
        </p>
        <p>
          <span className="fw-bold">5</span> baños
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <Button className="consult-button me-2">Consultar</Button>
      </div>
    </div>
  );
};

export default PropertyCard;
