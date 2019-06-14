//While si la condición se cumple ejecuta el ciclo.
let i=0;
while(i<10){
   if( i===5){
       console.log('Cinco');
       i++;
       break;
   }
    console.log(`Número: ${i}`);
    i++;
}

const musica= ['Cancion1','Cancion2', 'Cancion3'];

let a=0;
while(a<musica.length){
    console.log(`Reproduciendo ${musica[a]}`);
    a++;
}
//Do corre el código sin importar si se cumple la condición
let b=12;
do{
    console.log(`Número: ${b}`);
    b++;
} while(b<10);