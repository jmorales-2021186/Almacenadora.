import React from 'react'

export const Footer = () => {
  return (
    <>  <footer className='footer'>
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
