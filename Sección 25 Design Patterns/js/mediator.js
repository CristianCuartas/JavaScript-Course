const Vendedor = function(nombre){
    this.nombre= nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype={
    oferta: function (articulo, precio){
        console.log(`Tenemos el articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador}`);
    }
}

Comprador.prototype={
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

//Mediador

const Subasta = function(){
    let compradores = {};
    return{
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Instnaciar las clases - crear los objetos
const cristian = new Comprador('Cristian');
const david = new Comprador('David');
const jonnathan = new Comprador('Jonnathan');
const ricardo = new Comprador('Ricardo');
const sebas = new Comprador('Sebas');
const steven = new Comprador('Steven');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(cristian);
subasta.registrar(david);
subasta.registrar(jonnathan);
subasta.registrar(ricardo);
subasta.registrar(sebas);
subasta.registrar(steven);

vendedor.oferta('Tesla PicUp', 40000);
cristian.oferta(45000, cristian);
david.oferta(50000, david);
jonnathan.oferta(55000, jonnathan);
vendedor.vendido(jonnathan);


