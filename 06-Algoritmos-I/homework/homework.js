'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

//  opcion teacher // es mejor!
let array = [1]; // coloco el 1 xq ya se que todo numero es divisible x 1
  let i = 2;
  while(num !== 1){  // hay que parar de dividir cuando num llegue a 1
    if(num % i === 0){  // aca voy preguntando si el num es divisible por i, o sea, que el resto sea 0
      array.push(i); // si entra al if, pusheo el i
      num = num/i; // ALTERNATIVA: // num=/i  // aca voy reasignando num el resultado de la division
    }else{ // si num en algun momento deja de ser divisible por 2, no entra al if   e incrememnta la variable de i para que la proxima vuelta del while i ya sea 3
      i++; // aumenta el valor de i en uno
    }
  }
  return array; // cuando num sea 1 deja de entrar al while y viene aca a retornar el array
}
  // como lo hice yo //
/*var esprimo = function(numero) {
  for(let i = 2; i < numero; i++){
    if(numero % i === 0){
      return false
  }
}
return true;
}

var array = [1]
for(let i = 2; i <= num; i++){
  while(esprimo(i) && num % i === 0){
    num /= i;
    array.push(i)
  }
}
   return array

}*/



function bubbleSort(array) { 
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro, comparando el primer elemento con el segundo y asi sucesivamente.
  // Devolver el array ordenado resultante
  // Tu código:
  

for( let i = 0; i < array.length -1; i++){ // este ciclo solo cuenta cuantas veces j va recorrer el array ejecutando la sentencia
  for( let j = 0; j < array.length -1; j++){ // se pone .length -1 xq como voy comparando de a pares, el ultimo par esta conformado por [anteultimo con (anteultimo +1 que seria el ultimo elemento)], entonces ahi tengo que parar.                                                                                                                                                                            96
    if( array[j] > array[j+1]) {// defino mi condicion, en este caso si es mayor que el siguiente. Se utiliza array[j+1] para desplazarme a la siguiente posicion para poder comparar.                                                                                                     pos j=4 ---> 96  vs  pos j+1= 4+1=5 ----> 10 
     let aux = array[j];// creo una variable auxiliar para guardar el valor existente de array[j] antes de reasignarle su nuevo valor
     array[j] = array[j+1]; // reasigno valor y asi intercambio de lugar el elemento en el array
     array[j+1] = aux;// reasigno valor y asi intercambio de lugar el elemento en el array
  }
}
}
return array
}
// let array = [ 45, 12, 88, 2, 96, 10]
// El ciclo i solo cuenta la cantida de veces que voy a recorrer el array entero
// El ciclo j anidado es el que realiza la ejecucion de sentencia, se va encargar
// de comparar el primer elemento j=0 del array con el segundo j=1, si se da la condicon del if
// va a intercambiar la posicion de esos elementos y luego va seguir comparando con j=1 comparar con j=2
// y asi hasta el final del array.
// La recorrida entera que hace j se va realizar la cantidad de veces que indique el ciclo i
// Resultado : array = [2, 10, 12, 45, 88, 96]







function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
// POS 0   1  2  3   4   5           0   1  2   3  4   5         0  1   2   3   4  5        0  1   2   3   4  5         0  1   2   3   4  5           0  1   2   3   4  5
  // [ 10, 6, 5, 80, 14, 1]        [ 6, 10, 5, 80, 14, 1]      [ 5, 6, 10, 80, 14, 1]     [ 5, 6, 10, 14, 80, 1]      [ 5, 6, 10, 14, 80, 1]  --->   [ 1, 5, 6, 10, 14, 80,]
  //       i                                i                               i                              i                              i
  //   j                                j                               j                              j                               j
  // aux = 6                       aux = 5                        aux = 80                   aux = 14                        aux = 1

  for(let i = 1; i < array.length; i++){ // i = 1 xq empiezo desde esa poscion para poder comparar hacia atras
    let j = i-1; // esta variable me va servir para comparar el elemento de la izquierda, empieza en posicion 0 o sea i-j
    let aux = array[i]; // me guardo lo que vale en cada posicion, para despues ir agregandolo adelante de todo  del array
    while(j>=0 && array[j] > aux){ // empiezo a comparar hacia la izquierda hasta que j llegue a posicion 0 y mientras que j sea mayor que i, si j es menor que aux ahi no se sigue corriendo j
      array[j+1] = array[j]; // entra y reasigno los valores para cambiar de lugares y quede adelante el menor
      j--; // retrocedemos a j una posicion cada vez que entro al while para ir comparando hacia atras
    }
    array[j+1] = aux; // la variable aux tenia guardado el valor i antes que este lugar fuera reasignado, asi no se pierde. Cuando j ya deje de correr hacia atras, ahi quedara el valor
  }
  return array;
}
  



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor, 
  // va encontrando el valor min en cada pasada e intercambiando los lugares, llevando al min para adelante.
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
// POS  0   1   2   3    4        0   1   2   3    4     0  1   2   3    4     0  1   2   3    4 
  //   [15, 9, 11, 199, 2]       [2, 9, 11, 199, 15]    [2, 9, 11, 199, 15]   [2, 9, 11, 199, 15]--->[2, 9, 11, 15, 199]  
  //    i                            i                          i                         i
  //        j->   ->  ->                 j->   ->                   j->                        j
  //      min = i = posicon 0  = 15 
  //      min = j = posicion 1 = 9 
  // J va a ir recorriendo todo el array comparando y buscando el min en cada vuelta, recien al final del recorrido hace el intercambio de lugares.
  // Una vez j termine todo el recorrido, recien i comienza otro ciclo y adelnata una posicion
  for(let i = 0; i < array.length-1; i++){ // length -1 xq j va ir una posicion adelante
    let min = i;// hace referencia a la posicion no al valor, el valor minimo va empezar siendo el de la posicion 0
    for(let j = i+1; j < array.length; j++){
      if(array[j] < array[min]){ // 9 < 15
        min = j;  //si se da la condicon del if, entro y redefino la posicion de quien es el mas chico
      }
    }
    if(i !== min){  // si i dejo de ser el minimo, entonces intercambio los valores de posicion a continuacion
      let aux = array[i]; 
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}





//    NOTA: TODOS ESTOS ORDENAMIENTOS SE PUEDEN REALIZAR UTILIZANDO EL METODO .sort(function(a,b))
// si hay que ordenar de menor a mayor seria:
/*   
     var arraycreciente = array.sort(function(a,b) {
     return a - b
     })
     return arraycreciente
     } 

     */


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
