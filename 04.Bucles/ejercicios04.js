function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
let vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for (let i = 0; i < phrase.length; i++) {
  if (vocales.includes(phrase[i].toLowerCase())) {
    contador++;
  }
}

return contador;


}


/*En esta función, se define un array vocales que contiene todas las vocales en minúsculas. Luego, se inicializa una variable contador para llevar la cuenta de las vocales encontradas.
A continuación, se utiliza un bucle for para iterar sobre cada carácter de la frase. Dentro del bucle, se verifica si el carácter actual está incluido en el array vocales. Para ello, se utiliza el método includes() que verifica si un elemento está presente en un array.
Si el carácter es una vocal, se incrementa el contador contador.
Finalmente, se retorna el valor de contador, que representa la cantidad de vocales encontradas en la frase. */



  
function primerDivisible(numeroInicial, num) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
let i = numeroInicial;
while (i % num !== 0) {
  i++;
}
return i;


}

/*"hola"))

/*
while (numeroInicial % num !==0) {
  numeroInicial++;

}
return numeroInicial;
}
*/
/*
*/ //Revisar test
/*La función recibe dos parámetros: numeroInicial, que es el número a partir del cual se buscará el primer número divisible, y num, que es el número por el cual se buscará la divisibilidad.
Dentro del bucle while, se incrementa el valor de numero en cada iteración y se verifica si es divisible por num utilizando el operador %. El bucle continuará hasta que numero sea divisible por num.
Cuando se encuentra el primer número divisible, se retorna su valor. */



function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
let i = 1;
while (i <= 100) {
  if (i === x) {
    return "El numero X es: " + i;
  }
  i++;
}
return "No se encontro el numero";

}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇

let i = 0;
let suma = 0;
while (i <= num) {
  suma += i;
  i++;
}
return suma;


}


function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
let decimal = 0;
const longitud = num.length;

for (let i = 0; i < longitud; i++) {
  const bit = parseInt(num.charAt(longitud - 1 - i));
  decimal += bit * Math.pow(2, i);
}

return decimal;
}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇


}



function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇

}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇

}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}