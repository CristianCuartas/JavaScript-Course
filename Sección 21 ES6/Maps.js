//Maps

let cliente = new Map();
cliente.set('nombre', 'Cristian');
cliente.set('apellido', 'Hernandez');
cliente.set('tipo', 'Gold');
cliente.set('saldo', 100000);

console.log(cliente);

//Obtener un valor
console.log(cliente.get('nombre'));
//Comprobar la exitencia de un valor
console.log(cliente.has('saldo'));
//Borrar un elemento del map
cliente.delete('saldo');
console.log(cliente);

//Pasar propiedades por default
const paciente = new Map(
    [ ['nombre', 'paciente'],
      ['habitacion', 'No definido'] ]
);

paciente.set('nombre', 'Cristian');
paciente.set('habitacion', 400);

console.log(paciente);

//Recorrer un Map

paciente.forEach((datos, idx)=>{
    console.log(`${idx} : ${datos}`)
})