// Clases y Prototypes
/* La clase es una abstracción de los prototypes */

/* PROTOTYPE */
function Playlist(nombre) {
  this.nombre = nombre;
}

Playlist.prototype.play = function() {
  console.log(`Reproduciendo ${this.nombre}`);
};

Playlist.prototype.eliminar = function() {
  console.log(`Eliminando la playlist ${this.nombre}`);
};

const playlist = new Playlist('Jamaica no problem JM');
const playlist2 = new Playlist('Irie vibes');

console.log(playlist);
console.log(playlist2);

playlist.play();
playlist2.eliminar();

/* CLASS */
class Series {
  constructor(nombre) {
    this.nombre = nombre;
  }
  play() {
    console.log(`Ver ${this.nombre}`);
  }
  eliminar() {
    console.log(`Eliminar ${this.nombre}`);
  }
}

const serie = new Series('Rick and Morty');
console.log(serie);
serie.play();
serie.eliminar();
