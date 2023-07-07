/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame que se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
function bienvenida(nombre, apellido) {
    return "Bienvenido " + nombre + " " + apellido;
  }

/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:

function calc(num1, operador, num2) {
    let resultado;
     if (operador === '+') {
      resultado = num1 + num2;
    } else if (operador === '-') {
      resultado = num1 - num2;
    } else if (operador === '*') {
      resultado = num1 * num2;
    } else if (operador === '/') {
      resultado = num1 / num2;
    } else {
      return "Operador inválido";
    }
     return resultado; 
  }

/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
function temp(max, min, porcentajeLluvia) {
    let mensaje = "";
     if (max < 15) {
      mensaje = "Es recomendable salir con abrigo";
    } else if (max < 26 && min > 17) {
      mensaje = "El día está lindo";
    } else if (min > 25) {
      mensaje = "El día estará caluroso";
    }
     if (porcentajeLluvia > 50) {
      mensaje += ", recomendable un paraguas";
    }
     return mensaje; 
  }


/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:

function arrayDeStrings(arr) {
    let nuevoArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        nuevoArray.push(arr[i]);
      }
    }
    return nuevoArray; 
  }

/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:

function stringInverso(str) {
    let nuevoString = ""
    for (let i = str.length -1; i >= 0; i--){
        nuevoString+=str[i]
    }
 return nuevoString 
 }

/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:

function personaMásJoven(personas) {
  let personaJoven = personas[0]; // Suponemos que la primera persona es la más joven
   for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < personaJoven.edad) {
      personaJoven = personas[i]; // Actualizamos la persona más joven
    }
  }
  return personaJoven.nombre; // Devolvemos el nombre de la persona más joven
}


/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:

function contadorDeLetras(cadena) {
  let contador = {}  // Creamos un objeto vacío para almacenar los resultados
     // Recorremos cada letra de la cadena
  for (let i = 0; i < cadena.length; i++){
    let letra = cadena[i]
     // Si la letra ya existe como propiedad en el objeto contador, incrementamos su valor
     if (contador[letra]){
      contador[letra]++;
     }
         // Si la letra no existe, la agregamos como propiedad y le asignamos el valor 1
      else  {
        contador[letra] = 1;
      }
  }
     // Devolvemos el objeto contador con la cantidad de veces que aparece cada letra
  return contador;
}
/* Ejemplo de uso
var resultado = contadorDeLetras("Hola mundo");
console.log(resultado); */



/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:
/*
var arrayObjetos = [
  { nombre: "Juan", sueldo: 2000 },
  { nombre: "María", sueldo: 2500 },
  { nombre: "Pedro", sueldo: 1800 }
];
*/
function sueldoMasAlto(array) {
  // Verificamos si el array está vacío
  if (array.length === 0) {
    return null; // Si el array está vacío, devolvemos null
  }
   // Inicializamos el objeto con el sueldo más alto como el primer objeto del array
  let sueldoMaximo = array[0];
   // Recorremos el array a partir del segundo objeto
  for (let i = 1; i < array.length; i++) {
   
     // Verificamos si el sueldo del objeto actual es mayor al sueldo máximo
    if (array[i].sueldo > sueldoMaximo.sueldo) {
      sueldoMaximo = array[i]; // Actualizamos el sueldo máximo
    }
  }
   return sueldoMaximo; // Devolvemos el objeto con el sueldo más alto
}
 // Ejemplo de uso
 /*
let empleados = [
  { nombre: "Juan", sueldo: 2000 },
  { nombre: "María", sueldo: 2500 },
  { nombre: "Pedro", sueldo: 1800 }
];
 let resultado = sueldoMasAlto(empleados);
console.log(resultado); */




/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota" 
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:

function aprobados(arr) {
    // Crear un nuevo array vacío para almacenar los nombres de los estudiantes aprobados
let aprobados = []
     // Iterar sobre cada objeto en el array 'arr'
for (let i = 0; i < arr.length; i++) {
  // Obtener la nota del estudiante actual
  let nota = arr[i].nota;
       // Verificar si la nota es mayor o igual a 80
if (nota >= 80) {
  // Si la nota es mayor o igual a 80, agregar el nombre del estudiante al array 'aprobados'
  aprobados.push(arr[i].nombre);
}
}
 // Devolver el array 'aprobados' con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80
 return aprobados;

}

/**
 function aprobados(arr) {
  // Crear un nuevo array vacío para almacenar los nombres de los estudiantes aprobados
  let aprobados = [];
   // Iterar sobre cada objeto en el array 'arr'
  for (let i = 0; i < arr.length; i++) {
    // Obtener la nota del estudiante actual
    let nota = arr[i].nota;
     // Verificar si la nota es mayor o igual a 80
    if (nota >= 80) {
      // Si la nota es mayor o igual a 80, agregar el nombre del estudiante al array 'aprobados'
      aprobados.push(arr[i].nombre);
    }
  }
   // Devolver el array 'aprobados' con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80
  return aprobados;
}
 */

/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
}