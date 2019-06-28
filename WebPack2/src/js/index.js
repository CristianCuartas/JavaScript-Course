import '../css/style.scss';
class Cliente {
    constructor(nombre){
        this.nombre = nombre;
    }
}
const cliente = new Cliente('Cristian');
console.log(cliente); 

const array = ['Producto1', 'Producto2', 'Producto3', 'Producto4'];
console.log(array);

const clientes =['Cliente 1', 'Cliente 2','Cliente 3', 'Cliente 4', 'Cliente 5'];
let html = '';
clientes.forEach(item =>{
    html = html + `
    <li>${item}</li>`;
})
document.getElementById('clientes').innerHTML = html;