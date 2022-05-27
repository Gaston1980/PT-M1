const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// EJERCICIO N1 //
// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];

//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

// opcion teacher usando recursion //
var countArray = function(array) {
    // Tu código aca:
    var suma = 0;

    for (let i = 0; i < array.length; i++) { // el caso de corte se va dar cuando se llegue al final del array
        if(Array.isArray(array[i])) {
            // repetir la misma lógica
            suma = suma + countArray(array[i]) // aca se realiza la recursion
        }
        else {
            suma = suma + array[i];
        }
    }

    return suma;
}

// opcion 1 hecha x mi pero que no se aconseja xq no es eficiente //

/*var countArray = function(array) {
    // Tu código aca:
    var arrayaux = [];
    var suma = function (a,b){
        return a + b
    }
  
    for( let i = 0; i < array.length; i++) {;
        if(Array.isArray(array[i])) {
        for( let j = 0; j < array[i].length; j++) {
            if (Array.isArray(array[i][j]) === false){
            arrayaux.push(array[i][j])
            }
            if(Array.isArray(array[i][j])) {
                for( let k = 0; k < array[i][j].length; k++) {  
                    if (Array.isArray(array[i][j][k]) === false){       
                    arrayaux.push(array[i][j][k])
                    }
                    if(Array.isArray(array[i][j][k])) {
                        for( let l = 0; l < array[i][j][k].length; l++) { 
                            arrayaux.push(array[i][j][k][l])
                        }  
       
    }
}
 }
}
} else {

        arrayaux.push(array[i])
    
    }
}
return arrayaux.reduce(suma)
}
*/


// OPCION 2 hecha x mi MUCHO MAS SIMPLE USANDO EL METODO .FLAT() //

/*              var countArray = function(array) {
                    var suma = function (a,b){
                    return a + b
                    }
                    return array.flat(Infinity).reduce(suma)
                    }

*/




// EJERCICIO N.2 //
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//  a: {
//    a1: 10,
//    a2: 'Franco',
//         a3: {f: 'r', a: 'n', c: {o: true}}
//  },
//   b: 2,
//  c: [1, {a: 1}, 'Franco']
//  }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function(obj) {
    // Tu código aca:
    var contador = 0
for(let keys in obj) {
contador++
if( typeof obj[keys] === "object" && !Array.isArray(obj[keys])) { // si es un objeto y si no es un array ( xq un array es considerado un objeto para js entonces pasaria el if)
contador = contador + countProps(obj[keys]) // recursion xq si me topo con otro objeto necesito recorrerlo y contar sus keys
}
}
return contador
}


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
 var changes = 0  // para ir contando los cambios que se den en los values

 var current = this.head // nodo 1, defino mi punto de partida para recorrer la lista
while( current) { // mientras haya un nodo, o sea que next no sea null
if( isNaN(Number(current.value))){ // va entrar al if solo si al transformar a numero el value retorna un Nan 
 current.value = "Kiricocho"
 changes ++  // para contar las veces que se pudo cambiar la variable x Kiricocho
}
current = current.next  // para desplazarme de nodo a nodo
}
return changes
}

// EJERCICIO 4  //
// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues (objetos), se pueden usar los metodos que ya estan agregados en el DS.js

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
 var newQueue = new Queue() // instancio una nueva queue que es la que se va a devolver

 while( queueOne.size() || queueTwo.size()){ // mientras tengan elementos en una o la otra , anda sacandolos.  Aprovecho y uso el .size() para ver si tienen elementos
     var elemento1 = queueOne.dequeue(); //7 saco el primer elemento de la queue1 y va quedar guardado en elemento1. Aprovecho y uso el metodo .dequeue() guardado en el DS.js
     var elemento2 = queueTwo.dequeue(); //2 saco el primer elemento de la queue2 y va quedar guardado en elemento2
     // if(elemento1) {                   // esta es otra opcion de preguntar si elemento1 o elemento 2 tiene algo en vez de usar la expresion && mas abajo
     //     newQueue.enqueue(elemento1) 
     // }
     // if(elemento2) {                   
     //     newQueue.enqueue(elemento2) 
     // }
     elemento1 && newQueue.enqueue(elemento1) // primero pregunto si elemento1 tiene algo o es undefined , si tiene algo, agrego el elemento1 al newQueue
     elemento2 && newQueue.enqueue(elemento2) // primero pregunto si elemento1 tiene algo o es undefined, si tiene algo agrego el elemento2 al newQueue
 }                                            // esto es xq si me llego a quedar sin elementos en queue1 o queue2, 
                                                //y se que el metodo dequeue() devuelve un undefined si es un array vacio, yo no quiero me agregue el undefined al newQueue

 return newQueue; // cuando ya no hayan quedado elelemntos por sacar, no entra al while y viene aca y retorna el newQueue
}

// newQueue = {
//     array: [1, 2, 4, 5, 6, 7, 9]
// }

// const queueOne = new Queue()
// queueOne.enqueue(1);
// queueOne.enqueue(3);
// queueOne.enqueue(5);
// queueOne.enqueue(7);
// queueOne.enqueue(9);

// queueOne = {
//   array: [1, 3, 5, 7, 9]
// }

// queueTwo = {
//     array: [2, 4, 6]
// }

 

// EJERCICIO 5 //
// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) { // los clousures son funciones que retornan una funcion
    // Tu código aca:
return function(num) {
   return num * multiplier
}
}
// EJERCICIO 6 //
// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca: // debo recorrer el arbol partiendo desde el nodo root

if(!this.left && !this.right) return this.value; // corta la recursion, se comienzan a resolver todos los contxtos de ejecucion y se llega a la suma total
// este para el caso que no tenga nodo en izq ni en derecha // es mi caso de corte de la recursion 
if(!this.left && this.right) return this.value + this.right.sum()  // el valor del nodo donde estoy parado + el valor del nodo de la derecha
// este para el caso tengo nodo solo en la derecha
// aca pregunto si no tenes nodo en la izquierda pero si en la derecha
if(!this.right && this.left) return this.value + this.left.sum() // el valor del nodo donde estoy parado + el valor del nodo de la izq
// este para el caso tenga nodo solo  en izq
if(this.left && this.right) return this.value + this.left.sum() + this.right.sum()
// este para el caso tenga nodo en la izq y en la derecha
// aca partiendo desde mi nodo Root pregunto si hay un nodo a la izq y a la derecha.
// si hay va a devolver el valor del nodo root que es this.value sumado con el valor del nodo izq y el valor del nodo derecho. 
// como esto lo voy a tener que hacer cada vez que vaya avanzando en e arbol, utilizo la recursion y llamo
// a la funcion sum() sobre cada nodo que va apareciendo a la izq y a la derecha
}





module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}