import React, {useState, useEffect} from 'react'
import { NavBar } from '../components/NavBar'
import { ListarBodegas } from '../components/ListarBodegas'
import axios from 'axios'

export const BodegasPage = () => {

    const [bodegas, setBodegas] = useState([]);

    const getBodegas = async () =>{
        try{    
            const { data } = await axios('http://localhost:3418/storage/get');
            setBodegas(data.storages) 
        }catch(e){
            console.log(e);
        }
    }
    
    useEffect(()=> getBodegas,[])

    return (
        <>

            <div className=''>
                <NavBar />

            </div>
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
                    bodegas.map(({id, name}, i) =>{
                        return(
                            <ListarBodegas key={i} id={id} name={name} />
                        )
                    })
                }
            </div>

        </>
    )
}
