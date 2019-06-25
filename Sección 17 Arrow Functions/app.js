let aprendiendo;

aprendiendo = () =>{
    console.log('Aprendiendo JavaScript')
}
aprendiendo();
 
//En una sola linea NO requiere llave.
aprendiendo = () => console.log('Arrow function en una linea');
aprendiendo();
 
//Retorna Valor
aprendiendo = () => 'Arrow function en una linea';
console.log(aprendiendo());

//Retorna objeto
aprendiendo = () => ({aprendiendo: 'Arrow Functions'});
    console.log(aprendiendo());

//Pasar parametros
aprendiendo = (tecnologia) =>{
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('a pasar parametros en arrow functions.');

//Pasar un parametro 
aprendiendo = tecnologia =>{
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('ES6.');

//Pasar dos parametros 
aprendiendo = (tecnologia, tecnologia2) =>{
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript','React JS');

const productos  = ['Disco', 'Camitesa', 'Guitarra'];
const lengthProductos = productos.map(producto =>{
    return producto.length
})
console.log(lengthProductos);

productos.forEach(productos =>{
    console.log(productos);
})