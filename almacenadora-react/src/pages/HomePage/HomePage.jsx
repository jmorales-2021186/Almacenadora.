import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import "./HomePage.css";
import bodega1 from "../../assets/bodega1.jpg";
import bodega2 from "../../assets/bodega2.jpg";
import bodega3 from "../../assets/bodega3.jpg";
import bodega4 from "../../assets/bodega4.jpg";
import bodega5 from "../../assets/bodega5.jpg";
import bodega6 from "../../assets/bodega6.jpg";

import { Comentarios } from "../../components/Comentarios";
import { Footer } from "../../components/Footer";
import { AddUser } from "../../components/User/AddUser";

export const HomePage = () => {
  const [imagenes, setImagenes] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <section className="hola">
        <h2 style={{fontSize: '4.5vw'}}>La mejor manera de <span className="verde responsive">almacenar tus productos</span> </h2>
        
      </section>

      <hr className="m-5 fw-bold" />
      <section id="galeria" className="container">
        <div className="text-center pt-5">
          <h1>Algunas Bodegas...</h1>
        </div>

        <div className="row">
          <div className="col-lg-4" style={{ objectFit: "contain" }}>
            <img src={bodega1} alt="" />v
          </div>
          <div className="col-lg-4">
            <img src={bodega3} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={bodega2} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={bodega4} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={bodega5} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={bodega6} alt="" />
          </div>
        </div>
      </section>

      <hr className="m-5 fw-bold" />
      <Comentarios></Comentarios>
      <AddUser></AddUser>
      <Footer></Footer>
    </>
  );
};
