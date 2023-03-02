import React from 'react'
import Grupo from './CardGrupo.jsx'

import FCFM from '../Imgs/FCFM.jpg'
import LMAD from '../Imgs/LMAD.jpg'
import LM from '../Imgs/LM.jpg'
import LF from '../Imgs/LF.jpg'
import LA from '../Imgs/LA.jpg'
import LCC from '../Imgs/LCC.jpg'
import LSTI from '../Imgs/LSTI.jpg'

const grupos =[
    {
        id:1,
        title:'FCFM',
        image: FCFM
    },
    {
        id:2,
        title:'LMAD',
        image: LMAD
    },
    {
        id:3,
        title:'LM',
        image: LM
    },
    {
        id:4,
        title:'LF',
        image: LF
    },
    {
        id:5,
        title:'LA',
        image: LA
    },
    {
        id:6,
        title:'LCC',
        image: LCC
    },
    {
        id:7,
        title:'LSTI',
        image: LSTI
    },
]


function Grupos() {
  return (
   <div className="container d-flex justify-content-center pt-5 mt-5" style={{height:'auto'}}>
        <div className="row row-cols-md-4 row-cols-sm-2">
            {
                grupos.map(grupo =>(
                    <div className="col pb-5" key={grupo.id}>
                        <Grupo title={grupo.title} imgSource={grupo.image}/>
                    </div>
                ))
            }
            
           
        </div>
   </div>
  )
}

export default Grupos