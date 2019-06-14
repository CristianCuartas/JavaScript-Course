//Cuando se poner una función dentro de un objeto. 

const musica = {
    reproducir: function(){
        console.log(`Reproduciendo música`);
    },
    pausar: function(){
        console.log(`Pause a la música`);
    }
}
 musica.reproducir();
 musica.pausar();

 //Con parámetros 
 const musica2 = {
     reproducir: function(id){
         console.log(`Reprodución la canción ${id} del dispositivo.`);
     },
     pausar: function(id){
         console.log(`Se ha pausado la canción ${id}`);
     }
 }
 musica2.reproducir(10);
 musica2.pausar(10);

 //Los métodos también pueden crearse fuera del objeto

 musica2.borrar= function(id){
     console.log(`Borrando la canción ${id}`);
 }

 musica2.borrar(10);