//Se repite hasta que se cumpla la condición.

for(let i=0; i<=10;i++){
    console.log(`Número: ${i}`)
}
console.log('');
for (let i=0; i<=10; i++){
    if(i==5){
        console.log('Voy en el 5');
        continue;
    }
    console.log(`${i}`)
}
console.log('');
for (let i=0; i<=10; i++){
    if(i==3){
        console.log('Voy en el 3');
        break;;
    }
    console.log(`${i}`)
}
console.log('');
for (let i=0; i<=10; i++){
    if(i % 2 == 0){
        console.log(`El número ${i} es par`);
        continue;
        
    } else{
        console.log(`El número ${i} es impar`);
        continue;
    }
}
//For en un arreglo
 
const products = ['Camisa', 'Boleto', 'Mouse', 'Celular', 'Computadora'];
console.log(products.length)
for(let i=0; i<products.length; i++){
console.log(`Tu producto ${products[i]} fue agregado`);
}