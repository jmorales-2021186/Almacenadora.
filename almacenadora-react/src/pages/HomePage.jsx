import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import './HomePage.css'
import axios from 'axios'
import { Comentarios } from '../components/Comentarios'





export const HomePage = () => {

  const [imagenes, setImagenes] = useState([])


  const comentarios = async (url) => {
    try {
      

      let { data } = await axios(url);
      let results = data.results
      let datos = results[0]
      let insertar = {
        src: datos.picture.medium,
        nombre: datos.name.first
      }

      setImagenes([...imagenes, insertar])


    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {
    comentarios('https://randomuser.me/api/ ')
  }, [])











  return (
    <>
      <NavBar></NavBar>
      <section className="hola">
        <h2>Almace<samp className='verde'>nadora</samp> </h2>
      </section>



      <div className="contenedor">

        <div className='altura'>
          <div className='titulo'>
            <h1>Algunos CLientes</h1>
          </div>
          {
            imagenes.map(({ src, nombre }, i) => (
              <Comentarios key={i} name={nombre} src={src} />
            ))
          }
        </div>


      </div>

      <footer className='footer'>
        <div className='contenedor'>
          <div className='almacen'>
            <h1>Almace<span className='verde'>nadora</span></h1>
          </div>

          <section className='final'>
          <div className="desarrolladores">
            <h2>Desarrolladores</h2>
            <ul>
              <li>
                <h3>jmorales</h3>
              </li>
              <li>
                <h3>kaldana</h3>
              </li>
              <li>
                <h3>mhurtado</h3>
              </li>
              <li>
                <h3>esicajan</h3>
              </li>
              <li>
                <h3>mchajon</h3>
              </li>
            </ul>

          </div>

          <div className='desarrolladores'>
            <h2>Centro Tecnico Laboral Kinal</h2>
            <p>Dirección: 6A Avenida 13-54, Cdad. de Guatemala 01007</p>
            <p>Tel: 2216 0000</p>
          </div>
          </section>

        </div>

      </footer>









    </>
  )
}
