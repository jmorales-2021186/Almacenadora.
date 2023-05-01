import React, { useState, useEffect, useContext } from 'react'
import { NavBar } from '../../components/NavBar'
import { ListarBodegas } from '../../components/ListarBodegas'
import axios from 'axios'
import { NombreContexto } from '../../Index'
import { Link } from 'react-router-dom'

export const BodegasPage = () => {

    const { disponible, setDisponible, dataUser } = useContext(NombreContexto)
    const [bodegas, setBodegas] = useState([]);

    const getBodegas = async () => {
        try {
            const { data } = await axios('http://localhost:3418/storage/get');
            setBodegas(data.storages)

        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getBodegas, [])

    //Eliminar bodegas
    const deleteBodega = async (id) =>{
        try{
            let mensaje = confirm('Seguro de que quiere eliminar la bodega');
            if(mensaje){
                const { data } = await axios.delete(`http://localhost:3418/storage/delete/${id}`);
                getBodegas()
            }
        }catch(e){  
            console.log(e);
        }
    }

    return (
        <>

            <NavBar />

            <br /><br /><br /><br /><br />




            <div className='contenedor'>

                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Buscar"
                    />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>

            <div className='contenedor'>
                {
                    dataUser.role === 'ADMIN'
                        ? <Link to='/addBodega' className="btn btn-primary mt-5 ms-5">Nueva Bodega</Link>
                        : <></>
                }

                {
                    bodegas.map(({ _id, name, description, location, size, price }, i) => {
                        return (
                            <ListarBodegas 
                                key={i}
                               id={_id} 
                               name={name} 
                               description={description} 
                               location={location}
                                size={size} 
                                price={price} 
                                deleteBodega={deleteBodega}/>
                        )
                    })
                }
            </div>

        </>
    )
}
