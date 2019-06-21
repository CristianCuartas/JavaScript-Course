//Hay dos forma de crear Objetos en JavaScript
// 1.)
const cliente = {
    nombre: 'Cristian',
    edad: 18,
    saldo: 2500,
    tipoCliente: function (){
        let tipo;
        if( this.saldo > 1000){ //La palabra this es la forma en la que podemos acceder a los atributos de un objeto, o a otros métodos.
        //This. 'la propeiedad a la que queremos acceder'
            tipo = 'Gold';
        } else if(this.saldo>500){
            tipo = 'Platinum';
        } 
        else{
            tipo='Normal';
        }
        return tipo;
    }
}
console.log(cliente.tipoCliente());
//2.) Método alternativo
function Cliente(nombre, saldo){ //Constructor: paramatros para inicializar el objeto.
    this.nombre=nombre;
    this.saldo=saldo;
    this.tipoCliente =  function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Gold';
        } else if(this,saldo>500){
            tipo = 'Platinum';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
}

const persona = new Cliente('Cristian', 20000);
const persona2 = new Cliente('David', 600);
 console.log(persona);
 console.log(persona2.tipoCliente());