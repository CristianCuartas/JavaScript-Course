import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Formulario from './components/Formulario';
import {calcularTotal} from './helpers';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';
import Spinner from './components/Spinner';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      total : '',
      cantidad : '',
      plazo : '',
      cargando: false
    }
  }

  datosPrestamo = (cantidad, plazo) =>{
    // console.log('Desde app js');
    // console.log(cantidad, plazo);
      //Helper functions
   const total = calcularTotal(cantidad,plazo);
   //Poner el resultado en el state 
   this.setState({
    cargando: true
   }, ()=>{
     setTimeout(()=>{
      this.setState({
        total: total,
        cantidad: cantidad,
        plazo: plazo,
        cargando: false
      })
     },3000)
   })
  }

  render(){
    const {total, plazo, cantidad, cargando} = this.state;

    //Cargar un componente condicionalmente
    let componente;
    if (total === '' && !cargando){
      componente = <Mensaje/>
    } else if(cargando){
      componente = <Spinner/>
    }
    else{
      componente = <Resultado 
      total={total}
      plazo={plazo}
      cantidad={cantidad}
      />
    }
  return (
    <Fragment>
    <h1>Cotizador de prestamos</h1>
    <div className="container">
    <Formulario 
      datosPrestamo = {this.datosPrestamo}
    />
    <div className="mensajes">
     {componente}
    </div>
    </div>
    </Fragment>
   
  );
}
}

export default App;
