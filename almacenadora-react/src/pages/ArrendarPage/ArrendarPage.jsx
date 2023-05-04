import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../components/NavBar'
import axios from 'axios'
import { ListarArrendamientos } from '../../components/ListarArrendamientos'

export const ArrendarPage = () => {

    const [arrendamiento, setArrendamiento] = useState([]);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const getArrendamientos = async () => {
        try {
            const { data } = await axios(
                "http://localhost:3418/lease/get",
                { headers: headers }
            );
            console.log(data.leases);
            setArrendamiento(data.leases);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => getArrendamientos, []);


    const eliminarArrendamiento = async (id) => {
        try {
            let confirmar = confirm('Seguro de que quieres eliminar el Arrendamiento')
            if(confirmar){
                const { data } = await axios.delete(
                    `http://localhost:3418/lease/delete/${id}`,
                    { headers: headers }
                );
                alert(data.message)
                getArrendamientos()
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <div className="navFix">

                <NavBar />
            </div>


            <div className="contenedor">
                <Link to="/addArrendar" className="btn btn-primary mt-5 ms-5">
                    Arrendar Bodega
                </Link>


                {arrendamiento.map(
                    (
                        { _id, storage, user, additionalServices, startDate, endDate },
                        i
                    ) => {
                        return (
                            <ListarArrendamientos
                                key={_id}
                                id={_id}
                                storage={storage}
                                user={user}
                                additionalServices={additionalServices}
                                startDate={startDate}
                                endDate={endDate}
                                eliminarArrendamiento={eliminarArrendamiento}
                            />
                        );
                    }
                )}
            </div>
        </>
    )
}
