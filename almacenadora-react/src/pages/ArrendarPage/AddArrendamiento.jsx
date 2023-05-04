import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'

export const AddArrendamiento = () => {
    return (
        <>
            <div className="contenedor">
                <form className="m-5 text-center">

                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-labler">storage</label>
                        <select  id="inputCategory" className="form-control">
                        {/* {
                            categories.map(({_id, name}, i) =>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }  */}
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLocation" className="form-labler">user</label>
                        <select  id="inputCategory" className="form-control">
                        {/* {
                            categories.map(({_id, name}, i) =>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }  */}
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputSize" className="form-labler">additionalServices</label>
                        <select  id="inputCategory" className="form-control">
                        {/* {
                            categories.map(({_id, name}, i) =>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }  */}
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPrice" className="form-labler">startDate</label>
                        <input type="date" className="form-control" id="inputPrice" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-labler">endDate</label>
                        <input type="date" className="form-control" id="inputDescription" required />
                    </div>
                    

                    <Link to='' >
                        <button className="btn btn-success m-4" > ADD </button>
                    </Link>
                    {/* parametro.preventDefault(); mps sirve para refrescar los datos en la tabla de products */}
                    <Link to='/arrendar'>{/* Regresar */}
                        <button className="btn btn-danger m-3" >Cancel</button>
                    </Link>

                </form>
            </div>
        </>
    )
}
