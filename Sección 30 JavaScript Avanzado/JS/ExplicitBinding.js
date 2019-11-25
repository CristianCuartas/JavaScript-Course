// this con Explicit Binding (enlace explícito)

function persona(element_1, element_2) {
  console.log(`Hola soy ${this.nombre} y escucho ${element_1} y ${element_2}`);
}
const informacion = {
  nombre: 'Cristian',
  trabajo: 'Programador'
};
const generosMusicales = ['Reggae', 'Hip Hop'];

// Explicit Binding con .call => Cuando pasa el arreglo se deben colocar posiciones.

persona.call(informacion, generosMusicales[0], generosMusicales[1]);

// Explicit Binding con .apply => Toma todo el arreglo.

persona.apply(informacion, generosMusicales);

// Explicit Binding con .bind => Se asigna a una variable para luego llamarla como funcion.

const nuevaFN = persona.bind(
  informacion,
  generosMusicales[0],
  generosMusicales[1]
);
nuevaFN();
