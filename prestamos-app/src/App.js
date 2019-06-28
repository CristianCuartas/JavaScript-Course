import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Formulario from './components/Formulario';

class App extends Component() {

  datosPrestamo = () =>{
    console.log('Desde app js');
  }

  render(){
  return (
    <Fragment>
    <h1>Cotizador de prestamos</h1>
    <div className="container">
    <Formulario 
      datosPrestamo = {this.datosPrestamo}
    />
    </div>
    </Fragment>
   
  );
}
}

export default App;
