import * as React from "react";

import { Routes, Route } from "react-router-dom";
import {
  Home,
  Contact,
  Catalog,
  Secretary,
  Clients,
  AddClients,
  Events,
  AddEvents,
  RealEstateAgent,
  AddPropiedades,
  UpdatePropiedad,
  Propiedad,
  ViewClients,
  ViewEvents,
  Estates,
  Admin,
  Login,
  AboutUs,
  NotMatch
} from "../views";
import { useSelector } from "react-redux";

const LoadRoutes = () => {
  const userState = useSelector((state) => state.userState);

  React.useEffect(
    function () {
      console.log("userState: ", userState.email);
    },
    [userState.email]
  );
  return (
    <Routes>
      {userState.email !== "" ? (
        <>
        
          <Route exact path="/secretary" element={<Secretary />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/addclients" element={<AddClients />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/addevents" element={<AddEvents />} />
          <Route exact path="/realestateagent" element={<RealEstateAgent />} />
          <Route exact path="/addpropiedades" element={<AddPropiedades />} />
          <Route exact path="/propiedad/:id" element={<Propiedad />} />
          <Route exact path="/editar/:id" element={<UpdatePropiedad />} />
          <Route exact path="/viewclients" element={<ViewClients />} />
          <Route exact path="/viewevents" element={<ViewEvents />} />
          <Route extact path="/estates/" element={<Estates />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="*" element={<NotMatch />} />
        </>
      ) : (
        <>
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </>
      )}
    </Routes>
  );
};
export default LoadRoutes;
