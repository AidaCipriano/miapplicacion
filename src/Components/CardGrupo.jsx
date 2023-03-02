import React from 'react'

import './CardGrupo.css'

function Grupo({title, imgSource}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp animate__slow" id='cardGrupo'>
        <div className="overflow">
            <img src={imgSource} alt="" className='card-img-top' height="250"/>
        </div>     
        <div className="card-body text-light">
            <h4 className='card-title'>{title}</h4>
            <a href="/home/grupo" className='btn btn-outline-secondary w-100 btn-lg'>Entrar</a>
        </div>
    </div>
  )
}

export default Grupo
