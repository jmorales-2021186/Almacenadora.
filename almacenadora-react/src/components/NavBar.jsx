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
                Almace<span className="verde">nadora</span>
              </h1>
            </Link>
            <nav>
              <Link to="/bodegas">🏬Bodegas</Link>

              <Link>📑Servicios</Link>

              {/* 
                        <Link>👤{dataUser.role}</Link> */}

              {dataUser.role === "ADMIN" ? (
                <>
                  <Link to="/User">Nuevo Usuario</Link>
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
                  🔴Cerrar Secion
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
