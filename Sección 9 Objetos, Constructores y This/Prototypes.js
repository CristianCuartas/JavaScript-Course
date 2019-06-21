//Crear un prototipo a un método.
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Crear un prototipo: la funcion quedara visible solo para los objetos de tipo Cliente.
// 1.) Darle el nombre de la clase 
// 2.) Nombre al método
    // Cliente.prototype.tipoCliente = function (){
    //     let tipo;
    //     if (this.saldo >1000){
    //         tipo = 'Gold';
    //     } else if (this.saldo>500){
    //         tipo = 'Platinum';
    //     } else{
    //         tipo = 'Normal';
    //     }
    //     return tipo;
    // }

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Tu saldo es de: ${this.saldo}`;
}

    // Cliente.prototype.retirarSaldo = function(retiro){
    //     return this.saldo -= retiro;
    // }

const cliente1 = new Cliente('Pedro', 11000);

console.log(cliente1);

//Cómo heredar un prototipo.

//Banca para empresas
function Empresa(nombre, saldo, telefono, tipo){
    Cliente.call(this, nombre, saldo); //Heredado.
    this.telefono = telefono;
    this.tipo = tipo;
}
Empresa.prototype = Object.create(Cliente.prototype); //Heredamos el prototipo de Cliente, lo qué nos permite usarlo.
const empresa = new Empresa('Lexco', 100000000, 579879868, 'GD');
console.log(empresa);
//Heredar la funcionalidad en cadena.
console.log(empresa.nombreClienteSaldo());
