//Crear String con un constructor.
const nombre1 = 'Cristian';
console.log(nombre1);
 //Cada vez que se crea algo con new es un obejto.
 const nombre2 = new String('Pedro');
 console.log(typeof nombre2);

 //Crear Números con un constructor.
 const numero1 = 20;
 console.log(numero1);
 const numero2 = new Number(20);
 console.log(typeof numero2);

  //Crear Booleano con un constructor.
  const boolean1 = true;
  console.log(boolean1);
  const boolean2 = new Boolean(true);
  console.log(typeof boolean2);

  //Crear una función con un constructor.
  const function1= function(a,b){
      return a+b;
  }
  console.log(function1(10,10));
  const function2 = new Function('a', 'b', 'return 1 + 2');
  console.log(function2(5,5));
  //Crear Objetos con un constructor.
  const persona1 ={
      nombre: 'Cristian'
  }
  console.log(persona1);
  const persona2 = new Object({nombre: 'David'});
  console.log(persona2);
  
  //Crear Arreglos con un constructor.
  const arreglo1 = [1,2,3,4,5];
  console.log(arreglo1);
  const arreglo2 = new Array(6,7,8,9,0);
  console.log(arreglo2)