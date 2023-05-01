import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NombreContexto } from '../Index'


export const NavBar = () => {

    const { loggedIn, setLoggedIn } = useContext(NombreContexto)

    return (
        <>
            <header>
                <div className="contenedor">
                    <h1>Almace<span className='verde'>nadora</span></h1>
                    <nav>
                        <Link>
                            Bodegas
                        </Link>

                        <Link>
                            Servicios
                        </Link>
                        <Link>
                            Servicios Adicionales
                        </Link>

                        {
                            loggedIn ? (
                                <Link to='/login'>
                                    Cerrar Secion
                                </Link>
                            ) : (
                                <Link to='/login'>
                                    Iniciar Secion
                                </Link>

                            )
                        }
                        {

                        }
                    </nav>
                </div>
            </header>
        </>
    )
}
