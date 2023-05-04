import { useState, useEffect, useContext } from "react";
import { ServicesComponent } from "../../components/ServicesC/ServicesComponent";
import axios from "axios";
import imgLoading from "../../assets/loadImage.gif";
import { Link } from "react-router-dom";
import "../../components/Table/Table.css";
import "../HomePage/HomePage.css";
import { NavBar } from "../../components/NavBar";
import { LoginPage } from "../LogIn/LoginPage";
import { NombreContexto } from "../../Index";

export const ListServices = () => {
  const [loading, setLoading] = useState(true);
  const [servicios, setServicio] = useState([{}]);
  const { dataUser } = useContext(NombreContexto);

  //Headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getService = async () => {
    try {
      const { data } = await axios("http://localhost:3418/servicios/get", {
        headers: headers,
      });
      setServicio(data.servicios);
      console.log(data);
      setTimeout(() => setLoading(false), 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      let confirmDelete = confirm("Are you sure to delete this product?");
      if (confirmDelete) {
        const { data } = await axios.delete(
          `http://localhost:3418/user/delete/${id}`,
          { headers: headers }
        );
        getService();
        alert(`${data.message}: ${data.exitUser.name}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => getService, []);
  if (loading) {
    return (
      <>
        <center>
          <img src={imgLoading} alt="" />;
        </center>
      </>
    );
  }

  return (
    <>
      {dataUser.role == "ADMIN" ? (
        <>
          <div className="navFix">
            <NavBar></NavBar>
          </div>
          <div>
            <table className="table-custom">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map(({ _id, name, description, price }, index) => {
                  return (
                    <>
                      <tr key={index} value={_id}>
                        <ServicesComponent
                          name={name}
                          description={description}
                          price={price}
                        ></ServicesComponent>
                        <td>
                          {" "}
                          <Link to={`update/${_id}`}>
                            {" "}
                            <button className="btn btn-dark">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fillRule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                              </svg>
                            </button>
                          </Link>
                        </td>
                        <td>
                          {" "}
                          <button
                            className="btn-eliminar "
                            onClick={() => deleteUser(_id)}
                          >
                            trash
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="addService">
            <button className="btn btn-success mb-2"> add Service</button>
          </Link>
        </>
      ) : (
        <LoginPage></LoginPage>
      )}
    </>
  );
};
