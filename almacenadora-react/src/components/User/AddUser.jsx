import React, { useState, useContext } from "react";

import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { NombreContexto } from "../../Index";
import { NavBar } from "../../components/NavBar";
export const AddUser = () => {
  const navigate = useNavigate();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
  const { loggedIn, setLoggedIn, dataUser, setDataUser } =
    useContext(NombreContexto);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async (e) => {
    try {
      if (dataUser.role == "ADMIN") {
        e.preventDefault();
        const { data } = await axios.post(
          "http://localhost:3418/user/registerAdmin",
          form,
          {headers: headers},
        );
        if (data.message) {
          alert(data.message);
       
        }
      } else {
        e.preventDefault();
        const { data } = await axios.post(
          "http://localhost:3418/user/register",
          form
        );
        if (data.message) {
          alert(data.message);
          e.preventDefault(false);
        }
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
        {dataUser.role == "ADMIN" ? (
          <h3 className="text-center">Sing Up</h3>
        ) : (
          <h3 className="text-center">Resgistrate con Nosotros</h3>
        )}
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
              Surname
            </label>
            <input
              onChange={handleChange}
              name="surname"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Username
            </label>
            <input
              onChange={handleChange}
              name="username"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="">
              Phone
            </label>
            <input
              onChange={handleChange}
              name="phone"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            {dataUser.role == "ADMIN" ? (
              <>
                <label className="form-label" htmlFor="">
                  Role
                </label>
                <input
              onChange={handleChange}
              name="role"
              className="form-control"
              type="text"
            />
            
              </>
            ) : (
              <> </>
            )}
          </div>
          <button onClick={(e) => register(e)} className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
