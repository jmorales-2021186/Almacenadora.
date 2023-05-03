import React, { useState, useEffect, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LogIn/LoginPage";
import { BodegasPage } from "./pages/BodegasPage/BodegasPage";
import { AddBodega } from "./pages/BodegasPage/AddBodega";
import { UpdateBodega } from "./pages/BodegasPage/UpdateBodega";
import { User } from "./pages/NewUser/User";
import { Table } from "./components/Table/Table";
import { AddUser } from "./components/User/AddUser";

export const NombreContexto = createContext();

export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [disponible, setDisponible] = useState(false);
  const [dataUser, setDataUser] = useState({
    name: "",
    username: "",
    role: "",
  });

  const routes = createBrowserRouter([
    {
      errorElement: <NotFoundPage />,
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/bodegas",
          element: <BodegasPage />,
        },
        {
          path: "/addBodega",
          element: <AddBodega />,
        },
        {
          path: "/updateB/:id",
          element: <UpdateBodega />,
        },
        {
          path: "/User",
          element: <User />,
          children: [
            {
              path: "",
              exact: true,
              element: <Table></Table>,
            },
            {
              path: "addUser",
              exact: true,
              element: <AddUser />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <NombreContexto.Provider
      value={{
        loggedIn,
        setLoggedIn,
        disponible,
        setDisponible,
        dataUser,
        setDataUser,
      }}
    >
      <RouterProvider router={routes} />
    </NombreContexto.Provider>
  );
};
