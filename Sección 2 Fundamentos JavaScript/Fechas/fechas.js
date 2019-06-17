// Objeto llamado Date
const diaHoy= new Date();
console.log(diaHoy);

let Cumpleaños = new Date('09-11-2000');
console.log(Cumpleaños);

let fecha;

fecha = diaHoy.getMonth();
fecha = diaHoy.getDate();
fecha = diaHoy.getFullYear();
fecha = diaHoy.getMinutes();
fecha = diaHoy.getHours();
console.log(fecha);