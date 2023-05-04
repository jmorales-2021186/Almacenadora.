import React, {useState, useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AddArrendamiento = () => {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [storage, setStorage] = useState([])
    const [servis, setServis] = useState([])
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }


    //Obtener los usuarios
    const getUsers = async() =>{
        try{
            const { data } = await axios(
                'http://localhost:3418/user/getUsers',
                { headers: headers }
            )
            console.log(data);
            setUsers(data.existUsers)
        }catch(e){
            console.log(e);
        }
    }

    const getBodegas = async() => {
        try{
            const { data } = await axios(
                'http://localhost:3418/storage/get',
                { headers: headers }
            )
            setStorage(data.storages)
        }catch(e){
            console.log(e);
        }
    }


    const getServicios = async() =>{
        try{
            const { data } = await axios(
                'http://localhost:3418/servicios/get',
                { headers: headers }
            )
            setServis(data.servicios)
        }catch(e){
            console.log(e);
        }
    }

    const crearArrendamiento = async() => {
        try{
            let arrendamiento ={
                storage: document.getElementById('inputStorange').value,
                user: document.getElementById('inputUser').value,
                additionalServices: document.getElementById('inputServicios').value,
                startDate: document.getElementById('inputStart').value,
                endDate: document.getElementById('inputEnd').value  
            }

            console.log(arrendamiento);
            const { data } = await axios.post(
                'http://localhost:3418/lease/newLease',
                 arrendamiento,
                { headers: headers }
            )
            console.log('d');
                alert(data.message)
                navigate('/arrendar')
        }catch(e){
            console.log(e);
             alert(e.response.data.message)
        }
    }

    useEffect(()=> {
        getUsers()
        getBodegas()
        getServicios()
    },[])

    return (
        <>
            <div className="contenedor">
                <form className="m-5 text-center">

                    <div className="mb-3">
                        <label htmlFor="inputStorange" className="form-labler">storage</label>
                        <select  id="inputStorange" className="form-control">
                         {
                            storage.map(({_id, name}, i) =>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }  
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputUser" className="form-labler">user</label>
                        <select  id="inputUser" className="form-control">
                         {
                            users.map(({_id, name, role}, i) =>{
                                return(
                                    <option key={i} value={_id}>{name}-{role}</option>
                                )
                            })
                        }  
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputServicios" className="form-labler">additionalServices</label>
                        <select  id="inputServicios" className="form-control">
                         {
                            servis.map(({_id, name}, i) =>{
                                return(
                                    <option key={i} value={_id}>{name}</option>
                                )
                            })
                        }  
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputStart" className="form-labler">startDate</label>
                        <input type="date" className="form-control" id="inputStart" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEnd" className="form-labler">endDate</label>
                        <input type="date" className="form-control" id="inputEnd" required />
                    </div>
                    

                    <Link to='' onClick={()=>crearArrendamiento()}>
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
