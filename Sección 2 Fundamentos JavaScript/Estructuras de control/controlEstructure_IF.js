// If

const edad= 19;
if(edad >= 18){
    console.log('Mayor de edad');
} else{
    console.log('Menor de edad')
}

//Comprobar que una variable tiene un valor

const puntaje=1000;
if(puntaje){
    console.log(`El puntaje fue de ${puntaje}`);
} else{
    console.log(`No hay puntaje`);
}

const efectivo = 500;
const totalCompra=300;
 if (efectivo>totalCompra){
     console.log('Pago correcto')
 } else{
     console.log('Fondos insuficientes')
 }

 let hora = 0;
 if(hora >0 && hora<=10){
     console.log('Buenos días');
 } else if(hora > 10 && hora<=18){
     console.log('Buenas tardes')
 } else if (hora>18 && hora<=24){
     console.log('Buenas noches')
 } else{
     console.log('Hora no válida')
 }

 let dineroDisponible=100,
        credito=800,
        disponibleTotal= dineroDisponible + credito,
        total=500;
    if(total< efectivo || total<credito || total<disponibleTotal){
        console.log('Pago Correcto');
    } else{
        console.log('No se pudo realizar el pago');
    }

// Ternario
const login = false;

console.log( login === true ? 'Logeado':'No logeado')
