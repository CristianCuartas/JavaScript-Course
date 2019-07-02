import React, { Component } from 'react';
class Formulario extends Component {
    constructor(props){
        super(props);
        this.state={
            cantidad:'',
            plazo:'',
        }   
    }
    calcularPrestamo = (e)=>{
        e.preventDefault();
        this.props.datosPrestamo();
    }


    actualizarState=(e)=>{
        const {name, value} = e.target;

        this.setState({
            [name]: Number(value)
        })
    }
    habilitarSubmit =()=>{
        const {cantidad, plazo} =this.state;
        const noValido = !cantidad || !plazo;
        console.log(noValido);
        return noValido;
    }
    
    render() { 
        const{cantidad} =this.state;
        return ( 
            <form onSubmit={this.calcularPrestamo} >
            
            <div>
                <label>Cantidad de prestamo:</label>
                <input
                       onChange = {this.actualizarState}
                       type="number" 
                       name="cantidad" 
                       className="u-full-width" 
                       placeholder="Ejemplo: 3000"></input>
            </div>
            <div>
            <label>Plazo para pagar:</label>
            <select 
            onChange = {this.actualizarState}
            name="plazo" 
            className="u-full-width">
            <option value="">Seleccionar...</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
            </select>
            </div>
            <div>
            <input 
            disabled ={this.habilitarSubmit()}
            type="submit" 
            value="calcular" 
            className="u-full-width button-primary"/>
            </div>

            </form>
         );
    }
}
 
export default Formulario
