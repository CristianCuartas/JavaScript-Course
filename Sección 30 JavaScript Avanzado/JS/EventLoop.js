// JavScript Event Loop

/*
Un programa en ejecución se carga en un orden de prioridades:
1.) Stack  
2.) Queue
*/

console.log('1'); //Stack

setTimeout(function() {
  //Queue
  console.log('2');
}, 0);

console.log('3'); //Stack

setTimeout(function() {
  //Queue
  console.log('4');
}, 0);

new Promise(function(res) {
  //Queue con más prioridad
  res('Yo soy una promesa');
}).then(console.log);

console.log('5'); //Stack
