import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import "./HomePage.css";

import { Comentarios } from "../../components/Comentarios";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  const [imagenes, setImagenes] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <section className="hola">
        <h2>La mejor manera de almacenar tus productos </h2>
      </section>

      <Comentarios></Comentarios>

      <Footer></Footer>
    </>
  );
};
