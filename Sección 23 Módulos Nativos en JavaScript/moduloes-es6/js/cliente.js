
//Exportar Varibales
export const nombre = 'Cristian';
export let ahorro = 200;
//Exportar Funciones
export function mostrarInfo(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

//Exportar Clases
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

}
