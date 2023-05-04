import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NombreContexto } from "../Index";

export const NavBar = () => {
  const { loggedIn, setLoggedIn, dataUser, setDataUser } =
    useContext(NombreContexto);

  return (
    <>
      <div className="navDiv">
        <header>
          <div className="contenedor">
            <Link to="/">
              <h1>
                Almace<span className="verde ">nadora</span>
              </h1>
            </Link>
            <nav>
              <Link to="/bodegas">🏬Bodegas</Link>

              {
                dataUser.role === 'TRABAJADOR'
                  ? (
                    <Link to="/arrendar">Arrendar</Link>
                  ) : <></>
              }

              <Link>📑Servicios</Link>
              <Link>Servicios Adicionales</Link>

              {/* 
                        <Link>👤{dataUser.role}</Link> */}

              {dataUser.role === "ADMIN" ? (
                <Link to="/addUser">Nuevo Usuario</Link>
              ) : (
                <></>
              )}

              {loggedIn ? (
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                    setDataUser({});
                    setLoggedIn(false);
                  }}
                >
                  Cerrar Secion
                </Link>
              ) : (
                <Link to="/login">Iniciar Secion</Link>
              )}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
