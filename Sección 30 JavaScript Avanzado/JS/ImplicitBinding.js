// this con Implicit Binding (enlace implícito)

const usuario = {
  nombre: 'Cristian',
  edad: 19,
  presentacion() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  },
  mascota: {
    nombre: 'Irie',
    edad: 6,
    presentacion() {
      console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} meses.`);
    }
  }
};
usuario.presentacion();
usuario.mascota.presentacion();
