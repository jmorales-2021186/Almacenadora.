import React from 'react'
import { Link } from 'react-router-dom'

export const ListarArrendamientos = ({ id, storage, user, additionalServices, startDate, endDate,eliminarArrendamiento }) => {
    

    return (
        <>
            <div className="card m-5">
                <div className="card-header">bodega</div>
                <div className="card-body">
                    <h5 className="card-title">{ }</h5>
                    {/* <p className="card-text">
                        Disponibilidad: {availability ? "✅Disponible" : "❌NO DISPONIBLE"}
                    </p> */}
                    <p className="card-text">🏬Bodega: {storage.name}</p>
                    <p className="card-text">👤Usuario: {user.name}</p>
                    <p className="card-text">Start Date: {startDate}</p>
                    <p className="card-text">End Date: {endDate}</p>



                    <Link to='' className="btn btn-warning ms-1">
                        Editar
                    </Link>
                    <Link 
                        className="btn btn-danger ms-1"
                        onClick={()=>eliminarArrendamiento(id)}
                    >
                        Eliminar
                    </Link>

                </div>
                <div className="card-footer text-muted">-GT-</div>
            </div>
        </>
    )
}
