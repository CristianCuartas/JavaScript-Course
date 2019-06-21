//Variables
const presupuetoUsuario = prompt('¿Cual es tú presupuesto?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

//Clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}

class Interfaz{
    insertarPresuspuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }
    agregarGastoListado(nombre, cantidad){
        const gastosListado = document.querySelector('#gastos ul');

        const li = document.createElement('li');
        li.className='list-group-item d-flex justify-content-between aling-items-center';
        li.innerHTML=`
        ${nombre}
        <span class="badge badge-primary badge-pill"> ${cantidad} </span>
        `;
        // console.log(li)
        gastosListado.appendChild(li);
    }
    presupuestoRestante(cantidad){
        const restante = document.querySelector('#restante');
        const presupuestoRestanteUsuario = 
        cantidadPresupuesto.presupuestoRestante(cantidad);
        restante.innerHTML=`
        ${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }
    comprobarPresupuesto(){
        console.log(cantidadPresupuesto);
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        if(presupuestoTotal / 4 > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        }  else if(presupuestoTotal / 2 > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success',);
            restante.classList.add('alert-warning');
            
        }
    }
}

//Event Listeners
document.addEventListener('DOMContentLoaded', function(){
    if(presupuetoUsuario === null || presupuetoUsuario===''){
        window.location.reload();
    } else{
        cantidadPresupuesto = new Presupuesto(presupuetoUsuario);
        const ui = new Interfaz();
        ui.insertarPresuspuesto(cantidadPresupuesto.presupuesto);
    }
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
   //Leer el form
   const nombreGasto = document.querySelector('#gasto').value;
   const cantidadGasto = document.querySelector('#cantidad').value;

   const ui = new Interfaz();
   if(nombreGasto === '' || cantidadGasto ===''){
       ui.imprimirMensaje('Hubo un error', 'error');
   } else{
    ui.imprimirMensaje('Gasto agregado', 'correcto');
    ui.agregarGastoListado(nombreGasto, cantidadGasto);
    ui.presupuestoRestante(cantidadGasto);
   }
});