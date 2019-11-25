const map = new Map([
  ['nombre', 'Producto 1'],
  ['precio', 20]
]);
console.log(map);

const objeto = Object.fromEntries(map);
console.log(objeto);
