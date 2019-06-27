 const comprarBoleto = (function(){
     //Privado
     let evento = 'Conferencia JS 2019';
     let precio = 50000000;
     const adquirirBoleto = () =>{
         const elemento = document.createElement('p')
         elemento.textContent = `Comprar boleto para: ${evento} - Precio ${precio} `
         document.getElementById('app').appendChild(elemento);
     }
    //Publico
    return { //To lo qué este fuera del return no podrá ser accedido.
        mostrarBoleto: function(){
           adquirirBoleto();
        }   
    }
 })();
 //Para acceder debemos llamar varibale y la función publica contenida en el return 
 comprarBoleto.mostrarBoleto();
