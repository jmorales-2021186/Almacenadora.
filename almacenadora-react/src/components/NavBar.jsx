import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NombreContexto } from '../Index'


export const NavBar = () => {

    const { loggedIn, setLoggedIn, dataUser, setDataUser } = useContext(NombreContexto)

    return (
        <>
            <header>
                <div className="contenedor">
                    <h1>Almace<span className='verde'>nadora</span></h1>
                    <nav>
                        <Link to='/bodegas'>
                            🏬Bodegas
                        </Link>

                        <Link>
                            Servicios
                        </Link>
                        <Link>
                            Servicios Adicionales
                        </Link>

{/* 
                        <Link>👤{dataUser.role}</Link> */}

                        {
                            dataUser.role === 'ADMIN'
                                ? <Link >Nuevo Usuario</Link>
                                : <></>
                        }

                        {
                            loggedIn ? (
                                <Link to='/' onClick={() => {
                                    localStorage.clear()
                                    setDataUser({})
                                    setLoggedIn(false)
                                }}>
                                    Cerrar Secion
                                </Link>
                            ) : (
                                <Link to='/login'>
                                    Iniciar Secion
                                </Link>

                            )
                        }

                    </nav>
                </div>
            </header>
        </>
    )
}
