function primerElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el primer elemento
    // tu código 
return arg[0]
}

function ultimoElemento(arg){
    //dado el array pasado por parametro, tendras que devolver el ultimo elemento
    // tu código aqui: 
    return arg[arg.length - 1]

}

function nuevoArray(arg){
    //dado el array pasado por parametro retorna su longitud
    // tu código aqui:
    return arg.length

  }

function changeArray(arr){
    //dado el array pasado por parametro, cambia el valor del primero elemento por 'Aprendiendo' y
    //el ultimo elemento por 'array'
    //retorna el nuevo valor
    // tu código aqui:
    arr[0] = 'Aprendiendo';
    arr[arr.length - 1] = 'array';
    return arr;
}

function primerasCondicionales(arg){
    // pasados los array por parametros tendras que devolver según lo que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:
    if (arg.length === 0) {
        return 'Este array no contiene elementos';
      } else if (arg.length > 3) {
        return 'Este array es mayor a 3';
      } else if (arg.length === 3) {
        return 'Este array es igual a 3';
      } else {
        return 'Este array es menor a 3';
      } 
    }
   /* 
   function primerasCondicionales(arg){
    // pasados los array por parametros tendras que devolver según lo que corresponda:
    // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
    // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
    // longitud de array menor que 3 retornar: 'Este array es menor a 3'
    // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
    // tu código aqui:
     if (arg.length > 3){
        return 'Este array es mayor a 3';
    } else if(arg.length === 3) {
        return  'Este array es igual a 3';
    } else if (arg.length < 3) {
        return 'Este array es menor a 3';
    } else if (arg.length === 0) {
        return 'Este array no contiene elementos';
     }
   }*/


function sumandoEnUno(arg){
    // dado el array de numeros enteros pasado por parametro, a cada elemento del array
    // tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7] 
    // tu código aqui:
    let resultado = [];
    for (let i = 0; i < arg.length; i++) {
      resultado.push(arg[i] + 1);
    }
    return resultado;
/** 
La función  sumandoEnUno  toma un array de números enteros llamado  arg  como argumento. Dentro de la función, creamos un nuevo array vacío llamado  resultado  que utilizaremos para almacenar los elementos sumados. 
 
Luego, utilizamos un bucle  for  para iterar sobre cada elemento del array  arg . La variable  i  se utiliza como contador del bucle y comienza en 0. La condición del bucle es que  i  sea menor que la longitud del array  arg . En cada iteración, se ejecutan los siguientes pasos: 
 
1. Obtenemos el elemento actual del array  arg  utilizando la sintaxis  arg[i] . 
2. Sumamos 1 al elemento actual utilizando el operador  + . 
3. Agregamos el elemento sumado al array  resultado  utilizando el método  push() . 
 
Después de que el bucle ha terminado de iterar sobre todos los elementos del array  arg , devolvemos el array  resultado  con los elementos sumados. 
 
En resumen, la solución utilizando un bucle  for  es una forma válida de resolver el problema de sumar 1 a cada elemento de un array de números enteros. Sin embargo, la solución utilizando el método  map()  es más corta y elegante, y se recomienda su uso siempre que sea posible. */

   /* return arg.map(function(num) {
        return num + 1;
      }); */
       // return arg.map(num => num + 1);

}

function valorMaximo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    return Math.max(...arr);
    
}

/*
function valorMaximo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
    //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
    // Tu codigo:
    let max = arr[0]; // asumimos que el primer elemento es el máximo
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    
}
*/

/**utilizamos un bucle  for  para iterar sobre cada elemento del array  arr . Inicialmente, asumimos que el primer elemento del array es el máximo y lo almacenamos en la variable  max . Luego, comparamos cada elemento del array con  max . Si el elemento actual es mayor que  max , actualizamos el valor de  max  con el valor del elemento actual. Al final del bucle,  max  contendrá el valor más alto del array. Finalmente, devolvemos el valor de  max .  */



function valorMinimo(arr){
    //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más bajo y devolverlo
    //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
    // Tu codigo:
    
}

function cantPares(arr){
    //Se para un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
    // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:
    
}

function eliminarDuplicado(arr){
    // Se para un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:
    
}

function enOrden(arr, ascendente = true){
    //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    
}

function dosEnUno(arr1, arr2){
    //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
    
}

function matrizTranspuesta(matriz){
    //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
    //Tu codigo:
     
}

module.exports = {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
}