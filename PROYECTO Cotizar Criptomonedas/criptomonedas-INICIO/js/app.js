const ui = new Interfaz();
const cotizador = new API('16dd9734a2372b7b2af2e22906851c8d7e9aaf95eeec21b583dface58cb3c404');

cotizador.obtenerMonedasAPI();

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
   const monedaSeleccionada = document.querySelector('#moneda');
   const changeMoneda = monedaSeleccionada.options[monedaSeleccionada.selectedIndex].value;

   const criptoSeleccionada = document.querySelector('#criptomoneda');
   const changeCripto = criptoSeleccionada.options[criptoSeleccionada.selectedIndex].value;

   if(changeMoneda === '' || changeCripto === ''){
    ui.mostrarMensaje('No hay caracteres para la busqueda.', 'alert bg-danger text-center');
   } else{
    cotizador.obtenerValores(changeMoneda, changeCripto)
    .then(data =>{
        ui.mostrarResultado(data.resultado.RAW, changeMoneda, changeCripto);
    })
   }
})