class Cliente {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }
    tipoCliente(){
        let tipo;
        if (this.saldo>1000){
            tipo = 'Gold';
        } else if(this.saldo>500){
            tipo = 'Platinum';
        } else{
            tipo='Normal';
        }
        return tipo;
    }
    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }

    //Atributos estaticos norequieren crear instancias.
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}
console.log(Cliente.bienvenida());
const Cristian = new Cliente('Cristian', 'Cuartas' ,1111111);
console.log(Cristian);
Cristian.retirarSaldo(1001);
console.log(Cristian.imprimirSaldo())
console.log(Cristian.tipoCliente())