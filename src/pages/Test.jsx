import React from 'react';
import "./Test.css"
import Grupos from '../Components/CardsGrupos.jsx'

class Test extends React.Component{
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
	prop: props,
        cantidadBotones: 0
    };
  }
  componentDidMount() {
  }

  render() {
    return  (
      <div >
          <h1 className="width-100 d-flex justify-content-center mt-5 text-white animate__animated animate__fadeInDown">Grupos</h1>
          <Grupos/>
      </div>
        
    )}
}

export default Test;