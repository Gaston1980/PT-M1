'use strict'
// No cambies los nombres de las funciones.



function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if( array.length <= 1){  // sirve como caso de corte para la recursion
    return array
  }
var derechamayores = []
var izquierdamenores = []
var arrayordenado = []
var pivot = array.pop() // saco el ultimo elemento de cada array y lo comparo con los demas

for ( let i = 0; i < array.length; i++){ 
  if(array[i] <= pivot){
  izquierdamenores.push(array[i])
  } else{ 
    derechamayores.push(array[i])
  } 
}
return arrayordenado.concat(quickSort(izquierdamenores),pivot,quickSort(derechamayores)) 
}
// al final retorno a la misma funcion sobre los subarrays nuevos, llamo a la recursividad, hasta que se de el caso de corte
// que es el if primero, que dice cuando array.length = 1
// termina retornando un array ordenado concatenado


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if( array.length === 1){  // sirve como caso de corte para la recursion, cuando los arrays tengan un solo elemento
    return array
  }

  var mitad = Math.floor(array.length/2) // partimos el array en dos, si es impar se usa mathfloor para que no de decimal
  var left = array.slice(0, mitad) // desde 0 hasta mitad del array
  var right = array.slice(mitad) // desde mitad hasta el final del array

  return merge(mergeSort(left), mergeSort(right)) // aca se realiza la recursion hasta que tengamos arrays de un solo elemento, llega al caso de corte, sale y aplica la funcion merge que  ordena los arrays de menor a mayor y la devuelve
}
function merge(left, right) {
var leftI = 0 // mi indice i
var rightj = 0 // mi indice j
var array = [] // a donde voy a pushear

while(leftI < left.length && rightj < right.length) { // mientras que i y j no se vayan de rango 
  if( left[leftI] < right[rightj]) { // aca compara los 2 elementos
  array.push(left[leftI])
  leftI++ // i avanza una posicion

}
else {
  array.push(right[rightj])
  rightj++ // j avanza una posicion
}
}
return array.concat(left.slice(leftI)).concat(right.slice(rightj)) // concateno lo que haya quedado sin recorrer porque el i o el j se fue de rango y dejo de entrar al while
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
