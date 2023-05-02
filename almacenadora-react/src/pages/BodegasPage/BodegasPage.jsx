import React, { useState, useEffect, useContext } from "react";
import { NavBar } from "../../components/NavBar";
import { ListarBodegas } from "../../components/ListarBodegas";
import axios from "axios";
import { NombreContexto } from "../../Index";
import { Link } from "react-router-dom";

export const BodegasPage = () => {
  const { disponible, setDisponible, dataUser } = useContext(NombreContexto);
  const [bodegas, setBodegas] = useState([]);
  const [alamacenador, setAlmacenador] = useState({});
  const [busqueda, setBusqueda] = useState("");

  const getBodegas = async () => {
    try {
      const { data } = await axios("http://localhost:3418/storage/get");
      setBodegas(data.storages);
      setAlmacenador(data.storages);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => getBodegas, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  //Busqueda
  const filtrar = (terminoDeBusqueda) => {
    var resultados = alamacenador.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase())
      ) {
        return element;
      }
    });
    setBodegas(resultados);
  };

  //Eliminar bodegas
  const deleteBodega = async (id) => {
    try {
      let mensaje = confirm("Seguro de que quiere eliminar la bodega");
      if (mensaje) {
        const { data } = await axios.delete(
          `http://localhost:3418/storage/delete/${id}`
        );
        getBodegas();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <NavBar />

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="contenedor">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
            value={busqueda}
            onChange={handleChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>

      <div className="contenedor">
        {dataUser.role === "ADMIN" ? (
          <Link to="/addBodega" className="btn btn-primary mt-5 ms-5">
            Nueva Bodega
          </Link>
        ) : (
          <></>
        )}

        {bodegas.map(
          (
            { _id, name, description, location, size, price, availability },
            i
          ) => {
            console.log(bodegas[0].availability);
            return (
              <ListarBodegas
                availability={availability}
                key={i}
                id={_id}
                name={name}
                description={description}
                location={location}
                size={size}
                price={price}
                deleteBodega={deleteBodega}
              />
            );
          }
        )}
      </div>
    </>
  );
};
