'use strict'

const { argumentLexerOptions } = require("@11ty/eleventy/src/Engines/Liquid");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. 
//(Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {// constructor de la lista, crea un objeto con esas keys/values
  this.length = 0;  // nos permite saber cuantos nodos hay en la lista
  this.head = null;  // cuando se crea una lista, esta vacia, x eso la propiedad this.head siempre va ser null
}
LinkedList.prototype.add = function(value) {  // inserta un nodo al final de la lista
  let node = new Node(value)  // creo un nodo invocando al constructor de nodo y paso el valor que quiero almacenar
  var current = this.head  // creo la variable current, para tener un punto de partida, cuyo valor va ser this.head, que puede ser null si esta vacia o tener la info de un nodo.
  if( current === null) { // aca tengo que preguntar si la lista esta vacia
  this.head = node; // como esta vacia, entra al if e inserto el nodo
  this.length++;  // aumenta la cantidad de nodos de la lista
  return node;
  }     // si la lista no esta vacia, si el next esta apuntando a un nodo, entra al while
  while(current.next !== null){ // aca pregunto si this.head que seria node1 ahora xq que tiene un nodo, si su propiedad next apunta a un nodo, entra al while sino no entra
    current = current.next  // si entra, empieza a reasignar la variable para desplazarse hasta llegar a un null
  }
  current.next = node;// sino entra al while, en el caso que la lista tenga solo un nodo, se le cambia la proiedad next y se la apunta al nodo nuevo. asi se inserta el nodo2
  this.length++;  // aumenta la cantidad de nodos de la lista
  return node  // devuelve el nodo nuevo
}
LinkedList.prototype.remove = function() {  // elimina ultimo nodo de la lista
  let current = this.head
if( this.length === 0) return null;  // si la lista esta vacia

else if( this.length === 1) {  // si la lista tiene 1 nodo, tambien se puede poner if this.head === null
  let aux = current.value;  // Como la lista tiene 1 nodo, current que es this.head = Nodo1, x lo cual puedo acceder a sus propiedad value y guardo el valor del nodo antes de desvincularlo, xq lo tengo que retonar
  this.head = null;  // desvinculo la referencia para eliminar el nodo
  this.length--;  // disminuyo el length xq removi un elemento
  return aux;  // retorno el nodo eliminado
}
while(current.next.next) {  // Digamos que tengo 3 nodos en mi lista, aca pregunto si hay hay dos nodos x adelante: // current ---> nodo1      current.next ---> nodo2   current.next.next ---> nodo3
    current = current.next    // si hay, me voy desplazando hasta llegar un current.next.next que sea a null : ahora current  ---> nodo2   current.next ----> nodo3  ------current.next.next ----> null                 
}
let aux = current.next.value  // current.next ahora es el nodo3, el ultimo, entonces guardo el .value antes de eliminarlo, 
current.next = null;  // cambio la referencia del nodo anteultimo para eliminar ultimo nodo
this.length--;  // disminuyo la cantidad de nodos de la lista
return aux;  // devuelvo el nodo eliminado
}
  

LinkedList.prototype.search = function(value) { //  ejem, buscar tercer nodo
  let current = this.head;

  while( current){ // mientras current es !== null, o sea tiene un nodo adentro
    if( current.value === value) return current.value; // aca chequeao si el nodo que tiene es el que me pasaron por argumento
    
    else if(typeof value === "function") { // aca pregunto si lo que pasaron x argumento es una funcion, si es, la uso
      if(value(current.value)) { // aca invoco la funcion pasada x parametro, sobre el value del nodo donde estoy parado ahora y pregunto si es true o false
        return current.value; // si es true, o sea, si el value pasado x parametro en la funcion cb(value) es igual al value del nodo, lo retorno
      }
    }
    current = current.next; // si no entra en los dos primeros if, entonces me desplazo al siguiente nodo y vuleve entrar al while y a preguntar por los if
  }
  return null; // cuando while me de null, o sea, no tenga mas nodos, va venir aca a retornar un null
}

function Node(value){  // constructor de nodos, que recibo un valor para alamcenar x parametro
  this.value = value;
  this.next = null;  // siempre va ser null cuando se crea ya que se crea solo, aislado sin referencia del siguiente
}  // si bien se puede instanciar ejem, const elemento = new Node("Herramientas"),
   // no lo vamos utilizar asi, sino que se lo va invocar dentro del metodo add directamente.

// Nota: se utliza el this porque asi puede representar a todas las instancias creadas.
// this va apuntar al nombre del objeto instanciado
// Ahora con todo esto creado yo puedo instanciar LinkedLists :
//  const lista = new LinkedList()  ------> lista { head: null, length:0} 
// Puedo aplicar los metodos ahora:
// lista.add("USA")  ------> lista = head: {value:"Franco", next: null } length: 1
// lista.search("Alemania")
// lista.search(function("Argentina"))
// lista.remove() ----> elimina el ultimo nodo




// Hash Table //

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {   // constructor
  this.casilleros = [];   // defino la estructura de la hash table como un array, lo puedo llamar como quiero
  this.numBuckets = 35;  // defino la cantidad de posiciones que va tener la hash table
  this.size = 0;   // para saber la cantidad de elementos en la tabla       

}
// ahora puedo instanciar ejem, const table1 = new HashTable()   ----->  table = { numBuckets: 35, casilleros:[]}
HashTable.prototype.hash = function(key) {  //
  var suma = 0                              // para ir guardadno la suma de cada caracter
  for( let i = 0; i < key.length; i++){     // para recorrer el string que recibo por parametro
    suma = suma + key.charCodeAt(i)        // voy reasignando a suma el valor de cada caracter en la tabla Unicode sumado al siguiente valor del siguiente caracter
  }
  return suma % this.numBuckets;  // a la suma total, le aplico el modulo de l valor de la propiedad numBuckets y 
                                  //retorno el resultado que va ser la posicion que va ocupar esa key en mi hash table                              //
}

HashTable.prototype.set = function(key,value){ // metodo para guardar en determinado bucket mi par key : value ejem, {peras : 10}
  if(typeof key !== "string") {   // aca pregunto si la key pasada x parametro es un string, sino devolver un error de tipo
    throw new TypeError("Keys must be strings");
  }
  var posicion = this.hash(key); //como es una string, le aplico el metodo hash para obtener la posicion y lo guardo en una variable
  this.casilleros[posicion] = this.casilleros[posicion] || [];// aca pregunto a traves de una expresion si hay algo en esa posicion this.casilleros[posicion] = this.casilleros[posicion]
                                                              // || [] significa si aca no hay algo, generar un array,  esto para prevenir colisiones, si dos o mas elementos terminan teniendo el mismo valor hash, posicion.
   this.casilleros[posicion].unshift({ // aca lo que hago es agregar el objeto pasado por parametro al array en la posicion dada, se usa el unshift xq va agregando desde adelante
     key: key,
     value: value,
   })
 }


HashTable.prototype.get = function(key) { //metodo para buscar elementos en mi hash table, me pasan el nombre del elemento x parametro
const posicion = this.hash(key); // para buscarlo necesito saber su posicion, por lo que le invoco la funcion hash y guardo el resultado en una variable
for( let i = 0; i < this.casilleros[posicion].length; i++){ // como en esa posicion puede haber un array con un elemento o con varios, necesito recorrerlo, 
                                                           // this.casilleros[posicion].length -----> [ [ {}, {},], [{}], [{}, {}, {}] ] accedo asi ala posicion y recorro el array.length de ese array anidado en esa poscion
                                                            //                                             pos 0    pos 1    pos 2    
  if(this.casilleros[posicion][i].key === key) {    // chequeo si el elemento pasado por parametro coincide con el guardado en esa posicion       
    return this.casilleros[posicion][i].value   // si es true devuelvo el value de esa key                                              
  }
}
return false; // si no esta esa key en mi lista devuelvo false
}



                            


HashTable.prototype.hasKey = function(key) { //este metodo devuelve un true o false dependiendo si esta el elemento pasado por parametro o no
  var elemento = this.get(key); // aca invoco directamente al metodo this.get xq necesito hacer lo mismo y como cuando invoco this.get(key) se que me va devolver un valor o un false, yo esto lo guardo en una variable
   if( elemento) return true; // aca pregunto si hay elemento, si tiene un value guardado
   return false; // sino tiene devuleve false
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
