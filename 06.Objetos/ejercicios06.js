
// Completa el siguiente objeto 'alumnos' que tenga como primera propiedad nombre, segunda propiedad apellido, tercera edad y cuarta examen
// nombre y apellido deben tener como valor un string, edad un entero y examen un booleano.
// Tu código:
let alumnos = {
    nombre: "Nombre",
    apellido: "Apellido",
    edad: 31,
    examen: true
}


function datosObj(obj){
    // Pasado el objeto por paramentros compuesto de la siguiente manera : 
    //{ nombre: Leonardo, apellido: Avila }
    // obtener los valeres nombre y apellido y dar un mensaje de bienvenida 
    // 'Bienvenido Leonardo Avila' 
    // tu código aqui:

   // Paso 1: Obtener los valores de las propiedades "nombre" y "apellido" del objeto
   const nombre = obj.nombre;
   const apellido = obj.apellido;
    // Paso 2: Crear el mensaje de bienvenida utilizando los valores obtenidos
   const mensaje = 'Bienvenido ' + nombre + ' ' + apellido;
    // Paso 3: Retornar el mensaje de bienvenida
   return mensaje;
 
}
/**
// Ejemplo de uso:
const alumno = {
    nombre: "Leonardo",
    apellido: "Avila"
};
const mensajeBienvenida = datosObj(alumno);
console.log(mensajeBienvenida); */







function cambiandoPropiedades(obj){
    // Pasado el objeto por paramentros compuesto de la siguiente manera : 
    //{ nombre: Pablo, apellido: Perez, edad: 25 }
    // Agregar una propiedad 'nacionalidad' con el valor de 'Argentina'
    // tu código aqui:
   
// Paso 1: Agregar la nueva propiedad 'nacionalidad' al objeto y luego retornamos en objeto
obj.nacionalidad = 'Argentina';
return obj;
}
/**
// Ejemplo de uso:
const persona = {
    nombre: 'Pablo',
    apellido: 'Perez',
    edad: 25
};
cambiandoPropiedades(persona);
console.log(persona); */







function eliminarPropiedad(objeto, propiedad) {
    // Esta funcion recibe por parametros un objeto y una propiedad del mismo objeto.
    // tendrás que eliminar esa propiedad del objeto y devolver el objeto
    // Tu código:
    delete objeto[propiedad]; 
    return objeto; 

}
/* Ejemplo de uso:
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};
eliminarPropiedad(persona, 'edad');
console.log(persona); */





function contieneEmail(user) {
    // Devuelve true si el user contiene la propiedad de 'email', si no contiene devuelve false
    // Tu código:
    return user.hasOwnProperty('email');
}
/*
// Ejemplo de uso:
const usuario1 = {
    nombre: 'Juan',
    email: 'juan@example.com',
    edad: 30
};
console.log(contieneEmail(usuario1)); // Devuelve true

const usuario2 = {
    nombre: 'María',
    edad: 25
};
console.log(contieneEmail(usuario2)); // Devuelve false
*/




function verificarPassword(user) {
    // Por parametros se pasa una objeto el cual tiene una propriedad 'password'.
    // comprueba si el valor de esta propiedad tiene un longitud mayor o igual a 8 caracteres
    // si cumple devolver true, caso contrario devolver 'Porfavor, pon una contraseña más segura'
    // Tu código:
    if (user.password.length >= 8) {
        return true;
    } else {
        return 'Por favor, pon una contraseña más segura';
    
    }

}
/** Ejemplo de uso:
const usuario1 = {
    username: 'juan123',
    password: 'contraseñaSegura'
};
console.log(verificarPassword(usuario1)); // Devuelve true

const usuario2 = {
    username: 'maria456',
    password: '123456'
};
console.log(verificarPassword(usuario2)); // Devuelve 'Por favor, pon una contraseña más segura' */








function permisosDeEntrada(personas) {
    // 'personas' es un array de objetos 'persona', dentro de cada objeto tienen como propiedad
    // nombre, apellido, edad , entrada (valor booleano). comprobar cada persona
    // si contiene entrada (true) y si es mayor de edad. agregar en un nuevo array, las personas que cumplan
    // el nuevo array debe contener unicamente el nombre de las personas
    // tu código:
    let personasEntradas = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].entrada === true && personas[i].edad >= 18) {
            personasEntradas.push(personas[i].nombre);
        }
    }
    return personasEntradas;
}

/* Ejemplo de uso:
const personas = [
    { nombre: 'Juan', apellido: 'Gómez', edad: 25, entrada: true },
    { nombre: 'María', apellido: 'López', edad: 17, entrada: false },
    { nombre: 'Pedro', apellido: 'García', edad: 30, entrada: true },
    { nombre: 'Laura', apellido: 'Pérez', edad: 19, entrada: true }
];

console.log(permisosDeEntrada(personas)); // Devuelve ['Juan', 'Pedro', 'Laura'] */











let libro = {
    título: "1984",
    autor: "George Orwell",
    año: 1949
  };
  
  function mostrarInformacionLibro(libro) {
    return "El libro " + libro.título + ", escrito por " + libro.autor + ", fue publicado en " + libro.añoPublicación + ".";
  }
  
  

  
module.exports = {
    alumnos,
    eliminarPropiedad,
    cambiandoPropiedades,
    datosObj,
    contieneEmail,
    verificarPassword,
    permisosDeEntrada,
    libro,
    mostrarInformacionLibro
  };