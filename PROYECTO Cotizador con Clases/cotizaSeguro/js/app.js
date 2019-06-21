
function Seguro(marca, año, tipo){
    this.marca = marca;
    this.años = año;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(){
    /**Marcas
     1 = americano 1.15
     2 = asiatico 1.05
     3 = europeo 1.35
     */
    let cantidad;
    const base = 2000;
    switch(this.marca){
        case '1': 
        cantidad = base*1.15;
        break;
        case '2': 
        cantidad = base*1.05;
        break;
        case '3': 
        cantidad = base*1.35;
        break;
    }
    //Leer el año
    const diferencia = new Date().getFullYear() - this.años;
    //Cada año de diferencia se reduce el 3% del valor
    cantidad = cantidad -((diferencia *3)*cantidad) / 100;
    // Tipo de seguro
    if(this.tipo === 'basico'){
        cantidad *=1.30;
    } else{
        cantidad *=1.50;
    }
   return cantidad;
}

function Interfaz(){}

Interfaz.prototype.mostrarMensaje= function(mensaje, tipo){
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('mensaje','error');
    } else{
        div.classList.add('mensaje','correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },2000);
}

Interfaz.prototype.mostrarResultado = function(seguro, total){
    const resultado = document.getElementById('resultado');
    let marca;
    console.log(seguro);
    switch(seguro.marca){
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }
    const div = document.createElement('div');
    div.innerHTML = `
    <p class='header'> Tu resumen: </p>
    <p>Marca: ${marca}</p>
    <p>Año: ${seguro.años}</p>
    <p>Tipo: ${seguro.tipo}</p>
    <p> Total:${total}</p>`;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block'
    setTimeout(function(){
        spinner.style.display = 'none';
        resultado.appendChild(div);
    },1000)

    
}

const formulario = document.getElementById('cotizar-seguro');
 formulario.addEventListener('submit', function(e){
     e.preventDefault();
     const marca = document.getElementById('marca');
     const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    //  console.log(marcaSeleccionada);
    //  console.log('Hola');

    const año = document.getElementById('anio');
    const añoSeleccionado = año.options[año.selectedIndex].value;
    // console.log(añoSeleccionado);

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();

    //Validar form
    if(marcaSeleccionada === '' || añoSeleccionado==='' || tipo=== ''){
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
    } else{
        //Limpiar
        const resultados = document.querySelector('#resultado div');
        if(resultados != null){
            resultados.remove();
        }
        const seguro = new Seguro(marcaSeleccionada,añoSeleccionado, tipo);   
        const cantidad = seguro.cotizarSeguro();
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'correcto');
    }
 });

const max = new Date().getFullYear();
      min = max-20;

const selecAños = document.getElementById('anio');
for(let i=max; i> min; i--){
    let option = document.createElement('option');
    option.value=i;
    option.innerHTML = i;
    selecAños.appendChild(option);
}