import {Cliente} from './cliente.js';
//Exportar Varibales
export const nombre = 'Udemy';
export let ahorro = 20000000;
export const categoria ='Aprendizaje'
//Exportar Funciones
export function mostrarInfo(nombre, ahorro, categoria){
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria: ${categoria}`;
}

//Utilizar Clase modulo cliente
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInfo(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }

}
