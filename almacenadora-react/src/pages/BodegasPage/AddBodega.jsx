import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {NavBar} from '../../components/NavBar'

export const AddBodega = () => {
  const navigate = useNavigate();
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const addBodegas = async () => {
    try {
      let bodegas = {
        name: document.getElementById("inputName").value,
        location: document.getElementById("inputLocation").value,
        size: document.getElementById("inputSize").value,
        price: document.getElementById("inputPrice").value,
        description: document.getElementById("inputDescription").value,
        availability: true
       };

      const { data } = await axios.post(
        "http://localhost:3418/storage/save",
        bodegas,
        { headers: headers }
      );
      alert(data.message);
      navigate("/bodegas");
    } catch (e) {
      console.log(e);
      alert(data.response.data.message);
    }
  };
  return (
    <>
      <div className="navFix">
        <NavBar />
      </div>
      <h1></h1>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-labler">
            Name
          </label>
          <input type="text" className="form-control" id="inputName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputLocation" className="form-labler">
            Locacion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLocation"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputSize" className="form-labler">
            Tamaño
          </label>
          <input type="text" className="form-control" id="inputSize" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-labler">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-labler">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            required
          />
        </div>
        <div className="mb-3">
         {/*  <label htmlFor="inputAvailability" className="form-labler">
            Disponibilidad
          </label>
          <select className="form-control" id="inputAvailability">
            <option value="true"> Disponible</option>
            <option value="false">No disponible</option>
          </select>{" "} */}
        </div>

        <Link to="" onClick={() => addBodegas()}>
          <button className="btn btn-success m-4"> ADD </button>
        </Link>
        {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
        <Link to="/bodegas">
          {/* Regresar */}
          <button className="btn btn-danger m-3">Cancel</button>
        </Link>
      </form>
    </>
  );
};
