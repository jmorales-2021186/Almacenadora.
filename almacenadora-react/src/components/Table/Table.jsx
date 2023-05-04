import { useState, useEffect } from "react";
import { UserComponent } from "../User/UserComponent";
import axios from "axios";
import imgLoading from "../../assets/loadImage.gif";
import { Link } from "react-router-dom";
import "./table.css";
import "../../pages/HomePage/HomePage.css";
import { NavBar } from "../NavBar";
export const Table = () => {
  const [loading, setLoading] = useState(true);
  const [existUsers, setUser] = useState([{}]);

  const getUsers = async () => {
    try {
      const { data } = await axios("http://localhost:3418/user/getUsers");
      setUser(data.existUsers);
      setTimeout(() => setLoading(false), 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getUsers, []);
  if (loading) {
    return <img src={imgLoading} alt="" />;
  }

  return (
    <>
      <div>
        <table className="table-custom">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              <th>role </th>
            </tr>
          </thead>
          <tbody>
            {existUsers.map(
              ({ _id, name, surname, username, email, phone, role }, index) => {
                return (
                  <>
                    <tr key={index} value={_id}>
                      <UserComponent
                        name={name}
                        surname={surname}
                        username={username}
                        email={email}
                        phone={phone}
                        role={role}
                      ></UserComponent>
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
                        <button className="btn-eliminar ">trash</button>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <Link to="add">
        <button className="btn btn-success mb-2"> add worker</button>
      </Link>
    </>
  );
};
