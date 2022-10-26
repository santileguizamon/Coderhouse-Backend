class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nomre = nombre ;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName (){
        return `${this.nombre}`
    }
     addMascota (mascotas) {
        mascotas=" "
     }; 

    countMascotas(){0}
   
    addBook (nombre,autor){
       nombre=" ",autor=" "
    }
    getBookNames ();[]
} 

const usuario = {
   nombre : 'Juan',
   apellido : 'Lopez',
   libros : 'Harry Potter',
   mascotas : 'perro',
} 

getFullName();
addMascota();
countMascotas();
addBook();
getBookNames();