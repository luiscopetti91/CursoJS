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
for (let i = 1; i <= 100; i++) {
  if (i === x) {
    return "El numero X es: " + i;
  }
}
return "No se encontro el numero";


}

/*function encuentraX(x){
let i = 1;
while (i <= 100) {
  if (i === x) {
    return "El numero X es: " + i;
  }
  i++;
}
return "No se encontro el numero";
}
 */



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
let arr = [0, 1];
for (let i = 2; i < n; i++) {
  arr.push(arr[i - 1] + arr[i - 2]);
}
return arr;
}
/*
El código crea una función llamada Fibonacci que toma un parámetro n. La función genera una secuencia de Fibonacci con un índice igual al valor de n. Luego, la función devuelve la secuencia generada.
Paso a paso:
- La función Fibonacci toma un parámetro n que representa el índice de la secuencia Fibonacci que se desea generar.
- Se declara un arreglo llamado arr con los valores iniciales de 0 y 1, que son los primeros dos números de la secuencia Fibonacci.
- Se utiliza un bucle for que comienza en el índice 2 y continúa hasta n-1.
- Dentro del bucle, se agrega al arreglo arr el resultado de la suma de los dos valores anteriores en la secuencia Fibonacci (es decir, arr[i-1] + arr[i-2]).
- Finalmente, la función devuelve el arreglo arr que contiene la secuencia Fibonacci generada. */


function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇
if (numero <= 1) {
  return numero + " no es primo.";
}
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    return numero + " no es primo.";
  }
}
return numero + " es primo.";
}
/*
El código es una función llamada "esPrimo" que recibe un número como parámetro y verifica si es primo o no. Si el número es primo, devuelve el mensaje "numero es primo", de lo contrario devuelve "numero no es primo". 
 Explicación paso a paso:
 1. La función "esPrimo" recibe un número como parámetro.
2. Si el número es menor o igual a 1, devuelve el mensaje "numero no es primo" ya que los números menores o iguales a 1 no son considerados primos.
3. Si el número es mayor que 1, se inicia un bucle "for" que se ejecutará desde 2 hasta el número anterior al número ingresado.
4. Dentro del bucle, se verifica si el número ingresado es divisible por el número actual del bucle (i) utilizando el operador módulo (%). Si es divisible, significa que el número no es primo y se devuelve el mensaje "numero no es primo".
5. Si el bucle termina sin encontrar ningún número por el cual el número ingresado sea divisible, significa que el número es primo y se devuelve el mensaje "numero es primo". */




function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇
let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadenaInvertida;
}
/*
En este código, primero creamos una variable vacía llamada "cadenaInvertida". Luego, utilizamos un bucle "for" para recorrer la cadena de texto de atrás hacia adelante. En cada iteración del bucle, agregamos el carácter actual al comienzo de la variable "cadenaInvertida". Al final del bucle, devolvemos la variable "cadenaInvertida" como resultado.  
Por ejemplo, si llamamos a la función "invertirCadena('Hola')", la función devolverá la cadena invertida "aloH" */  



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