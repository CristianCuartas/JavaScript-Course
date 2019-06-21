class Cliente{
    constructor(nombre, saldo){
        this.nombre= nombre;
        this.saldo= saldo
    }
    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    static bienvenida (){
        return `Bienvenido al cajero`;
    }
}

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        //Va hacia el constructor padre
        super(nombre, saldo);
        //Son del constructor hijo
        this.telefono = telefono;
        this.tipo= tipo;
    }
}

const empresa = new Empresa('Empresa1', 10000, 3213118257, 'Publica');
console.log(empresa);
console.log(empresa.imprimirSaldo())