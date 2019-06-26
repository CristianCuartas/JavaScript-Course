import {nombre, ahorro, mostrarInfo, Cliente} from './cliente.js';
import {nombre as nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInfo as mostrarInfoEmpresa, Empresa} from './empresa.js';

console.log(nombre);
console.log(ahorro);

const info = mostrarInfo(nombre, ahorro);
console.log(info);

let cliente = new Cliente(nombre, ahorro);
console.log(cliente);

console.log(nombreEmpresa);
console.log(ahorroEmpresa);

const infoEmpresa = mostrarInfoEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa);

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa);
console.log(empresa.mostrarInfo());