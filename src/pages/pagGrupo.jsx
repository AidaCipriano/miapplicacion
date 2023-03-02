import React from 'react'
import './pagGrupo.css'
import LMAD from '../Imgs/LMAD.jpg'

function pagGrupo() {
  return (
    <div className="container-fluid d-flex justify-content-center p-0" id='containerGrupo'>
        <div className="row w-100 row-cols-lg-2 row-cols-1">
            <div className="col-lg-4 text-center " id='colGrupo'>
             <div className="img-name mb-2 animate__animated animate__fadeInLeft">
                <img src={LMAD} alt="" className='img-fluid rounded my-5' />
                <h1 className='text-white-50'>LMAD</h1>
                <button className='btn btn-outline-secondary border-0 w-100 fs-4 text-start'>Tareas</button>
             </div>
             <div className="subgrupos text-start border-2 border-top border-secondary pt-3 animate__animated animate__fadeInLeft">
              <h3 className='text-white-50 text-center'> Subgrupos</h3>
              <button className='btn btn-outline-secondary border-0 w-100 fs-4 text-start'>General</button>
              <button className='btn btn-outline-secondary border-0 w-100 fs-4 text-start'>POI Grupo 1</button>
              <button className='btn btn-outline-secondary border-0 w-100 fs-4 text-start'>POI Grupo 2<i class="bi bi-lock-fill ms-2"></i></button>
             </div>
            </div>
            <div className="col-lg-8 d-flex justify-content-center" id='colForo'>
              <div className="nuevoMensaje h-100 position-relative w-75">
                <ul id='muro'>
                  <li>Hola</li>
                </ul>
                <div className='w-100 text-center position-absolute pt-4 mb-3 bottom-0 start-0 border-2 border-top border-secondary'>
                  
                  <div className='input-group w-75 start-50 translate-middle-x  text-center'>
                  <input type="text" className='form-control bg-secondary border-0 text-white' id='inputChat'/>
                  <button className='btn btn-secondary'>Enviar</button>  
                  </div>
                  
               
                 
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default pagGrupo