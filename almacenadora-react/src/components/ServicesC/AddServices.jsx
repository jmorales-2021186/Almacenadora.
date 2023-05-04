import React, { useState, useContext } from "react";

import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { NombreContexto } from "../../Index";
import { NavBar } from "../../components/NavBar";
export const AddServices = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn, dataUser, setDataUser } =
    useContext(NombreContexto);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(dataUser.role);
    try {
    
        
        const { data } = await axios.post(
          "http://localhost:3418/servicios/add",
          form,
          { headers: headers }
        );
        if (data.message) {
          alert(data.message);
          navigate("/Services");
        }
    
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      throw new Error("Error registering user");
    }
  };
  return (
    <>
      <div className="navFix">
        <NavBar></NavBar>
      </div>

      <div className="container ">
        <h3 className="text-center">Add Service</h3>
        <form className="m-5 text-center">
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Description
            </label>
            <input
              onChange={handleChange}
              name="description"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Price
            </label>
            <input
              onChange={handleChange}
              name="price"
              className="form-control"
              type="number"
            />
          </div>

          <button onClick={(e) => register(e)} className="btn btn-primary">
            Add Service
          </button>
        </form>
      </div>
    </>
  );
};
