import React from 'react'

export const ListarBodegas = ({id, name}) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
                            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tratamiento especial del título</h5>
                            <p className="card-text">Con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
                            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
