import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { NombreContexto } from '../Index'

export const ListarBodegas = ({ id, name, description, location, size, price, deleteBodega }) => {
    
    const { dataUser } = useContext(NombreContexto)

    
    
    return (
        <>
        
             <div className="card m-5">
                <div className="card-header">
                    bodega
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Descripcion: {description}</p>
                    <p className="card-text">Tamaño: {size}</p>
                    <p className="card-text">Precio: {price}</p>
                    <p className="card-text">Locacion: {location}</p>

                    {
                        dataUser.role === 'TRABAJADOR' ? (

                            <Link   className="btn btn-primary">Reservar</Link>
                        ): (
                            <Link  className="btn btn-success ms-1">Go somewhere</Link>
                        )

                    }

                    {
                        dataUser.role === 'ADMIN'
                        ?(
                            <>
                                <Link to={`/updateB/${id}`}  className="btn btn-warning ms-1">Editar</Link>
                                <Link onClick={()=> deleteBodega(id)}  className="btn btn-danger ms-1">Eliminar</Link>
                            </>
                         ):<></>
                    }



                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div> 
        </>
    )
}
