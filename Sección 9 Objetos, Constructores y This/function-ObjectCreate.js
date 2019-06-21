//Nueva forma de crear un objeto especificado.
const Cliente = {
    //Métodos o protos
    imprimiriSaldo: function(){
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retiarSaldo: function(retiro){
        return this.saldo -= retiro; 
    }
}
//Crear el objeto
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo= 1000;
console.log(mary);
mary.retiarSaldo(300);
console.log(mary.imprimiriSaldo());
