
//Probar una función sin dañar la ejecución.
try{
    functionAlgo();
} catch (error){
    console.log(error)
}

function Descargar(){
    console.log(`Decargando...`);
    setTimeout(function(){
        console.log(`Completo`)
    },2000);
}
Descargar();


