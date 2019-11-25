function Playlist(nombre) {
  this.nombre = nombre;
}

Playlist.prototype.play = function() {
  console.log(`Reproduciendo ${this.nombre}`);
};

Playlist.prototype.eliminar = function() {
  console.log(`Eliminando la playlist ${this.nombre}`);
};

/* Herencia */

function Cancion(nombre, genero) {
  Playlist.call(this, nombre);
  this.genero = genero;
}

/* Heredar los métodos */

Cancion.prototype = Object.create(Playlist.prototype);

const cancion = new Cancion('Young lover', 'Roots Reggae');
const playlist = new Playlist('Jamaica no problem JM');

console.log(cancion);
console.log(playlist);
cancion.play();
playlist.play();
