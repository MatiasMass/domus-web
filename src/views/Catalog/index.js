import * as React from "react";
import "./Catalog.css";

//components
import { NavBar } from "../../layout";
import { PropertyCard } from "../../components";

const Catalog = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="d-flex mt-3">
        <div className="filter-container mx-3">
          <p className="fs-4 fw-bold">Filtros: </p>
          <div className="d-flex align-items-center mt-2">
            <input type="checkbox" className="checkbox-custom m-1" />
            <p>En venta</p>
          </div>
          <div className="d-flex align-items-center">
            <input type="checkbox" className="checkbox-custom m-1" />
            <p>En alquiler</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <input type="checkbox" className="checkbox-custom m-1" />
            <p>Zonas</p>
          </div>
          <div className="d-flex align-items-center">
            <input type="checkbox" className="checkbox-custom m-1" />
            <p>Dormitorios</p>
          </div>
          <div className="d-flex align-items-center mt-2">
            <input type="checkbox" className="checkbox-custom m-1" />
            <p>Departamento</p>
          </div>
          <div className="d-flex align-items-center">
            <input type="checkbox" className="checkbox-custom m-1" />
            <p>Casa</p>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {propertyes.map((property) => (
            <PropertyCard
              name={property.name}
              price={property.price}
              type={property.type}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <nav color="dark" aria-label="Page navigation example">
          <ul class="pagination pagination-lg">
            <li class="page-item">
              <p class="page-link" href="#">
                Previous
              </p>
            </li>
            <li class="page-item">
              <p class="page-link" href="#">
                1
              </p>
            </li>
            <li class="page-item">
              <p class="page-link" href="#">
                2
              </p>
            </li>
            <li class="page-item">
              <p class="page-link" href="#">
                3
              </p>
            </li>
            <li class="page-item">
              <p class="page-link" href="#">
                Next
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Catalog;

const propertyes = [
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
  {
    name: "Casa en el centro de la ciudad",
    price: "$15M",
    type: "Venta",
  },
];
