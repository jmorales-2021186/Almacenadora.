import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { NombreContexto } from '../../Index'
import '../LogIn/login.css'

export const LoginPage = () => {

  const { loggedIn, setLoggedIn } = useContext(NombreContexto);

  const navigate = useNavigate();
  const [log, setLog] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    })
  }


  const login = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3418/user/login', log);
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)//Ingresar e; token
/*         setDataUser(data.userL)
 */        setLoggedIn(true)//True para que se loggee
        console.log(loggedIn);
        navigate('/');
      }

    } catch (err) {
      alert(err.response.data.message)
      throw new Error('Error logeandose');
    }
  }

  return (
    <>
      <div className='cont'>
        <div className='general'>
          <h1>Login</h1>
          <form id='form'>
            <label>User Name</label>
            <input onChange={handleChange} name='username' type="text" placeholder='UserName' className='input' />

            <label>Password</label>
            <input onChange={handleChange} name='password' type="password" placeholder='Password' className='input'/>

            <button onClick={(e) => login(e)} className='button'>Iniciar</button>
            <div >
              <Link to='/' >
                <button className='button-2'>volver</button>
              </Link>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}
