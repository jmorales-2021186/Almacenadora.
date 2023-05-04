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
          <div className="contenedor">
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
                          </Link>
                          
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          <Link to="addService">
            <button className="btn btn-success mb-2"> add Service</button>
          </Link>
          </div>
        </>
      ) : (
        <LoginPage></LoginPage>
      )}
    </>
  );
};
