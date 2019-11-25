function sumar(a, b) {
  return a + b;
}
console.log(sumar.toString());

function Automovil(modelo, color) {
  this.modelo = modelo;
  this.color = color;
}
const auto = new Automovil('Camaro', 'Negro');
console.log(auto);
console.log(auto.toString());

/* Modificar el proptype */

Automovil.prototype.toString = function autoString() {
  const datos = `Auto: ${this.modelo} - Color: ${this.color}`;
  return datos;
};

console.log(auto.toString());
