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
    return Math.min(...arr); 
}

function cantPares(arr){
    //Se pasa un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
    // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
    // Tu codigo:
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 ===0){
            contador++
        }
    }
   return contador 
 
}

function eliminarDuplicado(arr){
    // Se pasa un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
    // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
    // Tu codigo:
    let nuevoArr = []
    for (let i = 0; i < arr.length; i++){
        if (nuevoArr.indexOf(arr[i]) === -1){
            nuevoArr.push(arr[i]);
        }
    }
    return nuevoArr
}

function enOrden(arr, ascendente = true){
    //Se pasa un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    /**utilizar una función de comparación personalizada dentro del método  sort() . Esta función de comparación debe recibir dos elementos del arreglo y devolver un valor negativo si el primer elemento es menor que el segundo, un valor positivo si el primer elemento es mayor que el segundo, o cero si ambos elementos son iguales.  */
    arr.sort(function(a, b) {
        if (ascendente) {
          return a - b;
        } else {
          return b - a;
        }
      });
      return arr;
}


/* if (ascendente) {
        arr.sort();
      } else {
        arr.sort().reverse();
      }
      return arr;
      
En esta solución, simplemente llamamos al método  sort()  en el arreglo  arr  para ordenarlo de forma ascendente. Si se especifica  ascendente  como  false , llamamos al método  sort()  y luego al método  reverse()  para obtener el orden descendente. 
 
Esta solución es más simple porque aprovecha el método  sort()  incorporado en JavaScript en lugar de implementar un algoritmo de ordenamiento personalizado.  */






function dosEnUno(arr1, arr2){
    //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
    //Tu codigo:
     // Se utiliza el operador spread (...) para combinar los dos arrays en uno solo
  const combinedArray = [...arr1, ...arr2];
   // Se utiliza el método Set para eliminar los elementos duplicados
  /*const uniqueArray = Array.from(new Set(combinedArray)); deberia retornar : return uniqueArray*/
   // Se devuelve el nuevo array sin elementos duplicados
  return combinedArray;
}
/**se combina el contenido de ambos arrays utilizando el operador spread ( ... ) y se devuelve el resultado sin realizar ninguna eliminación de duplicados. Como resultado, el nuevo array incluirá todos los elementos, incluyendo los duplicados. 
*/





function matrizTranspuesta(matriz){
    //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
    //Tu codigo:

      // Se obtiene el número de filas y columnas de la matriz original
  const filas = matriz.length;
  const columnas = matriz[0].length;
   // Se crea una matriz vacía para almacenar la matriz transpuesta
  const matrizTranspuesta = [];
   // Se recorren las columnas de la matriz original
  for (let columna = 0; columna < columnas; columna++) {
    // Se crea un nuevo array para almacenar la columna actual
    const nuevaColumna = [];
     // Se recorren las filas de la matriz original
    for (let fila = 0; fila < filas; fila++) {
      // Se agrega el elemento correspondiente a la nueva columna
      nuevaColumna.push(matriz[fila][columna]);
    }
     // Se agrega la nueva columna a la matriz transpuesta
    matrizTranspuesta.push(nuevaColumna);
  }
   // Se devuelve la matriz transpuesta
  return matrizTranspuesta;
}

/** 1. La función  matrizTranspuesta  recibe una matriz como parámetro, que es un array de arrays. 
2. Se obtiene el número de filas y columnas de la matriz original. Esto se hace tomando la longitud de la matriz y la longitud del primer array dentro de la matriz (asumiendo que todas las filas tienen la misma cantidad de elementos). 
3. Se crea un array vacío llamado  matrizTranspuesta  para almacenar la matriz transpuesta. 
4. Se inicia un bucle que recorre las columnas de la matriz original. Esto se hace utilizando un contador  columna  que se incrementa de 0 hasta el número de columnas. 
5. Dentro del bucle de columnas, se crea un nuevo array llamado  nuevaColumna  para almacenar la columna actual de la matriz transpuesta. 
6. Se inicia otro bucle que recorre las filas de la matriz original. Esto se hace utilizando un contador  fila  que se incrementa de 0 hasta el número de filas. 
7. Dentro del bucle de filas, se agrega el elemento correspondiente a la nueva columna. Esto se hace accediendo a la matriz original utilizando los índices  fila  y  columna . 
8. Una vez se han recorrido todas las filas, se agrega la nueva columna a la matriz transpuesta utilizando el método  push . 
9. Se repite el proceso hasta que se hayan recorrido todas las columnas. 
10. Finalmente, se devuelve la matriz transpuesta como resultado de la función. 
 Con esta solución, al llamar a la función  matrizTranspuesta  con una matriz como argumento, obtendrás la matriz transpuesta donde las filas se intercambian por columnas.  */

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