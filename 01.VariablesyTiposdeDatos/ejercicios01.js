// En los siguientes ejercicios deberás reemplazar el valor null
// por el correspondiente.

// Crea una variable de tipo string. // cadena de texto
const nuevoString = "Años";
// Crea una variable de tipo number.
const nuevoNumero = 12;

// Crea una variable de tipo boolean.
const nuevoBoolean = true;

// Resuelve el siguiente problema matemático.
const nuevaResta = 10 - 7 === 3;

// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático.

const nuevoModulo = 21 % 5 === 1;




function primerCaracter(string) {
      //Por parametros se pasa una cadena de texto. Tienes que devolver el primer carácter!
    //Tu código:👇

    // Verificar si la cadena no está vacía
    if (string.length > 0) {
      // Obtener el primer carácter utilizando el índice 0
      return string[0];
    } else {
      // Si la cadena está vacía, devolver null o un valor predeterminado
      return null; // o return 'Valor predeterminado';
    }
  } 



function ultimoCaracter(string){
    //Por parámetros se pasa una cadena de texto. Tienes que devolver el primer carácter!
    //Tu código: 👇

    if (string.length > 0) {
        return string[string.length - 1];
    } else {
        return null;
    }

}


function longitudDeCadena(string){
    //En este ejercicio tendrás que devolver la longitud de la cadena que se pasa por parámetros!
    //tu código: 👇

    if (string.length > 0) {
        return string.length
    } else {
        return null;
    }

}


function enMayusculas(string){
    //Pasado el string por parámetros tendrás que devolver el mismo contenido del string
    //pero todo en mayúsculas
    //tu código: 👇
    if (string.length > 0){ 
    return string.toUpperCase()
    } else {
        return null;
    }
  
}



function enMinusculas(string){
    //Pasado el string por parámetros tendrás que devolver el mismo contenido del string
    //pero todo en minúsculas
    //tu código: 👇

    if (string.length > 0) {
        return string.toLowerCase()
    } else {
        return null;
    }

}

function enlistandoNombres(args){
    //En el siguiente ejercicio se pasará por parámetros una cadena la cual contiene varios nombres
    //Ejemplo: Martin, Leonardo, Diego, Franco, Natalia
    //Tendrás que buscar un método el cual sirva para separarlos y crear una lista solo con los nombres!
    //Tu código: 👇

    let nombres = args.split(",");

    nombres = nombres.map(function(nombre) {
        return nombre.trim();
    });

return nombres;
}

console.log(enlistandoNombres("Martin, Leonardo, Diego, Franco, Natalia"))



function typeOF(params){
    //Por parametros se pasan distintos tipos de datos, con esta funcion tendras que devolver distintos el tipo de dato que es.
    //Tu código:👇
    return typeof params;


}

function repairToString(str){
    //Por parametro se pasará un string, el cual tiene su primera letra en minuscula y la ultima en mayúscula. EJ: "holA"
    //tendras que devolver el string como corresponda -> "Hola"
    //Tu código:👇
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


}

function contains(string){
    // Por parametros se pasará un string, tendrás que verificar si la cadena de texto contiene la siguiente sub-cadena -> "JavaScript"
    // Tu código:👇
    return string.includes("JavaScript");


}
console.log(contains("JavaScript"))

module.exports = {
    nuevoString,
    nuevoBoolean,
    nuevoNumero,
    nuevaMultiplicacion,
    nuevoModulo,
    nuevaResta,
    ultimoCaracter,
    primerCaracter,  
    longitudDeCadena,
    enMayusculas,
    enMinusculas,
    enlistandoNombres,
    primerCaracter,
    typeOF,
    repairToString,
    contains
}