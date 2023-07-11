function arrayDuplicados(array){
    // Por parametros recibiras un array de numeros, tendras que DEVOLVER cada numero del array duplicado! Usa: Metodo .map()
    // Tu codigo:
    let arrayDuplicado = array.map(function(numero) {
        return numero * 2;
      });
      return arrayDuplicado;
}

const nombresPersonas = (array) => {
    // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
    // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
    // Tu codigo:
    let nombres = array.map((objeto) => objeto.name);
    return nombres;
}
/**EJEMPLO DE USO:
 const personas = [
  { name: "Juan" },
  { name: "María" },
  { name: "Pedro" }
];
 const nombres = nombresPersonas(personas);
console.log(nombres);
 */


function masImpuestos(array){
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:
    let arrayConImpuestos = array.map((objeto) => {
        let impuestos = objeto.precio * 0.1;
        let objetoConImpuestos = {
          producto: objeto.producto,
          nSerie: objeto.nSerie,
          precio: objeto.precio,
          Impuestos: impuestos
        };
        return objetoConImpuestos;
      });
      return arrayConImpuestos;
}
/*
const productos = [
  { producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000 },
  { producto: 'Camiseta Adidas', nSerie: 2456789, precio: 500 },
  { producto: 'Pantalón Puma', nSerie: 9876543, precio: 750 }
];
 console.log(masImpuestos(productos));
*/




function NombresLargos(array){
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:

}

function filtaradoPorCategoria(array, categoria){
    // Recibiras por porametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
    // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
    // Tu codigo:

}

function examenIngreso(array){
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa (inscripcion = true)
    // Tu codigo:

}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈

}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}