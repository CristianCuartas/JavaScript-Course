const restaurarApp = {};
restaurarApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hamburguesa',
        precio: 25,
    },
    {
        platillo: 'Perro caliente',
        precio: 25,
    }
];

restaurarApp.funciones ={
    ordenar: id =>{
        console.log(`Tu Platillo: ${restaurarApp.platillos[id].platillo} se está preparando.`)
    },
    agregarPlatillo: (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio
        }
        restaurarApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos =>{
        console.log(`Bienvenidos a nuestro menu: `);
        platillos.forEach((platillo, idx) => {
            console.log(`${idx} : ${platillo.platillo} $${platillo.precio}`)
        });
    }
}
console.log(restaurarApp)

const {platillos} = restaurarApp;
restaurarApp.funciones.agregarPlatillo('Salchipapa', 25)
restaurarApp.funciones.mostrarMenu(platillos);
restaurarApp.funciones.ordenar(3);