let observer = {
    obtenerOfertas: function(callback){
        if(typeof callback === "function"){
            this.subscriptores[this.subscriptores.length] = callback;
        }
    },
    cancelarOfertas: function(callback){
        for(let i=0; i < this.subscriptores.length; i++){
            if(this.subscriptores[i] === callback){
                delete this.subscriptores[i];
            }
        }
    },
    publicarOferta: function(oferta){
        for(let i=0; i < this.subscriptores.length; i++){
            if(typeof this.subscriptores[i] === "function"){
                this.subscriptores[i](oferta);
            }
        }
    },
    crear: function(objeto){
        for (let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.subscriptores = [];
            }
        }
    }
}

const udemy = {
    nuevoCurso: function(){
        const curso = 'Curso de React JS';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const anuncio = 'Unirme a Facebook Citas 7u7';
        this.publicarOferta(anuncio);
    }
}

observer.crear(udemy);
observer.crear(facebook);

const Cristian = {
    interesa: function(oferta){
        console.log('Cristian dice: Me interesa la oferta de ' + oferta);
    }
}
const David = {
    compartir: function(oferta){
        console.log('David dice: Excelente oferta! ' + oferta);
    }
}
udemy.obtenerOfertas( Cristian.interesa );
udemy.obtenerOfertas( David.compartir );
udemy.nuevoCurso();
udemy.cancelarOfertas(Cristian.interesa);
udemy.nuevoCurso();

facebook.obtenerOfertas(Cristian.interesa);
facebook.obtenerOfertas( David.compartir );
facebook.nuevoAnuncio();