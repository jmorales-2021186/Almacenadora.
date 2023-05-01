import React, { useState, useEffect, createContext } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App'
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage'
import {LoginPage} from './pages/LoginPage'

export const NombreContexto = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const routes = createBrowserRouter([
        {
            errorElement: <NotFoundPage />,
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage />
                }
            ]
        }
    ])


    return (
        <NombreContexto.Provider value={{loggedIn, setLoggedIn}}>
            <RouterProvider router={routes} />
        </NombreContexto.Provider>
    )
}
