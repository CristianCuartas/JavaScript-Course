const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

//Consiste en encontar patrones, similitudes 
let valor, expReg;

expReg = /[0123456789]/;
valor=2000;

//La letra "d" minuscula busca digitos la 
//"D" mayuscula busca caracteres que no sean digitos
//"w" minuscula valida  letras
//Una fecha en expresión regular 11-09-2000

expReg=/\d\d-\d\d-\d\d\d\d/;
//       d d - m m - a a a a
valor= '11-09-2000';

//Hora 10:05 AM
expReg = /\d\d:\d\d \D\D/;
valor = '10:05 AM'

//Para evitar repetir escribir la exp Rgular 
expReg=/\d+/;
valor=156468748465;

//Negar la expresión
expReg=/[^0-9]/;
valor= 1;

//Sintaxis con llaves {RANGO}
expReg=/\d{2}:\d{2} \D{2}/;
valor='11:11 AM'

expReg=/\d{1,2}-\d{1,2}-\d{4}/;
valor= '11-09-2019';

expReg=/\w+/
valor='Hola'

console.log(expReg.test(valor));