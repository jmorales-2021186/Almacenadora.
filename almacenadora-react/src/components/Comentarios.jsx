import React, { useState, useEffect } from "react";
import axios from "axios";

export const Comentarios = ({ src, name }) => {
  const [imagenes, setImagenes] = useState([]);

  const coments = async (url) => {
    try {
      let { data } = await axios(url);
      let results = data.results;
      let datos = results[0];
      let insertar = {
        src: datos.picture.medium,
        nombre: datos.name.first,
      };

      setImagenes([...imagenes, insertar]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    coments("https://randomuser.me/api/ ");
  }, []);

  const imagenesSrc = imagenes.map((imagen) => imagen.src);
  const nameFunction = imagenes.map((name) => name.nombre);
  return (
    <>
      <div className="contenedor">
        <div className="altura">
          <div className="titulo">
            <h1>Algunos CLientes</h1>
          </div>

          <div className="media">
            <figure>
              <img className="img" src={imagenesSrc} alt={nameFunction} />
            </figure>
            <div>
              <h2 className="azul">{nameFunction}</h2>
              <p className="comet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                laboriosam, mollitia sunt molestias eligendi itaque unde
                temporibus aliquid distinctio enim ab aut minus nisi, culpa,
                totam libero error soluta velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
