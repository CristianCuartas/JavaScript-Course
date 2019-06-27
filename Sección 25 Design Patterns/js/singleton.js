const alumnos = {
    listaAlumnos: [],

    get: function(id){
        console.log(id);
        return this.listaAlumnos[id];
    },

    crear: function(datos){
        console.log(datos);
        this.listaAlumnos.push(datos);
        return datos;
    },
    listado: function(){
        return this.listaAlumnos;
    }
}

const infoAlumno = {
    nombre: 'Cristian',
    edad : 18
}
const infoAlumno2 = {
    nombre: 'David',
    edad : 19
}

alumnos.crear(infoAlumno);
alumnos.crear(infoAlumno2);

const listado = alumnos.listado();
console.log(listado);

const alumno = alumnos.get(1);
console.log(alumno);
