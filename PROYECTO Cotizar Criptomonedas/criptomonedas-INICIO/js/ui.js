class Interfaz{
    
    constructor() {
        this.init();
   }
   init() {
        this.construirSelect();
   }

   construirSelect() {
    const cotizador = new API('16dd9734a2372b7b2af2e22906851c8d7e9aaf95eeec21b583dface58cb3c404');
        cotizador.obtenerMonedasAPI()
             .then(monedas => {
                 const select = document.querySelector('#criptomoneda')
            //    console.log(Object.entries(monedas.monedas.Data))
                for (const [key, value] of Object.entries(monedas.monedas.Data) ){

                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);                
                }
             })
   }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        setTimeout(()=>{
            document.querySelector('.mensajes div').remove();
        },2000);
    }

    mostrarResultado(resultado, moneda, crypto){

        const resultadoAnterior = document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[crypto][moneda];
        console.log(datosMoneda);
        let precio = datosMoneda.PRICE.toFixed(2),
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-CO');
        let templateHTML =`
        <div class="card bg-warning">
            <div class= "card-body text-light">
                <h2 class="card-title">Resultado:</h2>
                <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio} </p>
                <p>Variación último día: % ${porcentaje}</p>
                <p>Última actualización: ${actualizado}</p>
            </div>
        </div>`;
        this.mostrarSpinner('block');
        setTimeout(()=>{
            document.querySelector('#resultado').innerHTML = templateHTML;
            this.mostrarSpinner('none');
        }, 3000)
   
    }

    mostrarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display =vista;
        }
}
