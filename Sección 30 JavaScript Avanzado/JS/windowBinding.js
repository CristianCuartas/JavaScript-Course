// this con Window Binding

function obtenerAuto() {
  console.log(`Mi automovíl es color ${this.color}`);
}
const color = 'Verde';

//El this revisa valores almacenados en el window.
window.color = 'verde';
obtenerAuto();
