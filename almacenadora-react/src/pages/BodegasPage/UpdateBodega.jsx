import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import {NavBar} from '../../components/NavBar'

export const UpdateBodega = () => {
  const navigate = useNavigate();
  const [bodegas, setBodegas] = useState({});

  const { id } = useParams();
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getBodega = async () => {
    try {
      const { data } = await axios(`http://localhost:3418/storage/get/${id}`, {
        headers: headers,
      });
      console.log(data);
      setBodegas(data.storage);
    } catch (e) {
      console.log(e);
      alert(data.response.data.message);
    }
  };

  const update = async () => {
    try {
      let editarBodegas = {
        name: document.getElementById("inputName").value,
        location: document.getElementById("inputLocation").value,
        size: document.getElementById("inputSize").value,
        price: document.getElementById("inputPrice").value,
        description: document.getElementById("inputDescription").value,
        availability: true,
      };
      const { data } = await axios.put(
        `http://localhost:3418/storage/update/${id}`,
        editarBodegas,
        { headers: headers }
      );
      alert(data.message);
      navigate("/bodegas");
    } catch (e) {
      console.log(e);
      alert(data.response.data.message);
    }
  };

  useEffect(() => {
    getBodega();
  }, []);
  console.log(bodegas);
  return (
    <>
      <div className="navFix">
        <NavBar />
      </div>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-labler">
            Name
          </label>
          <input
            type="text"
            defaultValue={bodegas.name}
            className="form-control"
            id="inputName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputLocation" className="form-labler">
            Locacion
          </label>
          <input
            type="text"
            defaultValue={bodegas.location}
            className="form-control"
            id="inputLocation"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputSize" className="form-labler">
            Tamaño
          </label>
          <input
            type="text"
            defaultValue={bodegas.size}
            className="form-control"
            id="inputSize"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-labler">
            Price
          </label>
          <input
            type="number"
            defaultValue={bodegas.price}
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
            defaultValue={bodegas.description}
            className="form-control"
            id="inputDescription"
            required
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="inputAvailability" className="form-labler">
            Disponibilidad
          </label>
          <input
            type="text"
            defaultValue={bodegas.availability}
            className="form-control"
            id="inputAvailability"
            required
          />
        </div> */}

        <Link to="" onClick={update}>
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
