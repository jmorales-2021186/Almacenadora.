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

              {/* 
                        <Link>👤{dataUser.role}</Link> */}

              {dataUser.role === "ADMIN" ? (
                <>
                  <Link to="/User">Usuarios</Link>
                  <Link to="/Services">Servicios Adicionales</Link>
                </>
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
                  Cerrar Sesion
                </Link>
              ) : (
                <Link to="/login">Iniciar Sesion</Link>
              )}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};
