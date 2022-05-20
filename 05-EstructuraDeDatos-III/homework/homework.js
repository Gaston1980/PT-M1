'use strict'
// resolve estos ejercicios usando recursión

// Binary Search Tree: ordena a la derecha del Root los elementos mayores y a la izquierda del Root los elementos menores
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) {  // constructor del arbol - cada Nodo va a ser un nuevo arbol -
  this.value = value;
  this.right = null;
  this.left = null;
}
// const tree = new BinarySearchTree(20)  ----> { value: 20, right: null, left:null}  mi Root
// Con esta forma de constructor, cuando instanceo por primera vez un arbol, ya va a nacer con el elemento root designado, no sera vacio.
// por esto en la funcion de insert no necesito preguntar si el arbol en su root esta vacio.

BinarySearchTree.prototype.insert = function (value){ // funcion que inserta elementos al arbol
  if(value > this.value){ // tengo que saber si el nuevo elemento es mayor al elemento root
    if(this.right !== null){ // si es, entra al segundo if y aca pregunto si a la derecha hay algo
      this.right.insert(value); // si hay un nodo, entra al if y utilizo recursion para volver a llamar a la funcion insert pero esta vez sobre this.right ( que es donde esta el elemento2 posicionado) y asi sucesivaente me voy desplazando hasta llegar a un this.right vacio/null
    }else{ // si el lado derecho esta vacio
      this.right = new BinarySearchTree(value); // entra aca y posiciona en el lado derecho el nuevo subarbol, instanciandolo con su value por parametro
    }
  }
  if(value < this.value){ // tengo que saber si el nuevo elemento es menor al elemento root
    if(this.left !== null){ // si es, entro al segundo if y aca pregunto si esta ocupado por un elemento
      this.left.insert(value); // si es asi, entro aca y vuelvo a llamar la funcion insert para hacer la recursion y volver a preguntar todo de nuevo sobre el nuevo nodo hasta llegar a uno con this.left vacio
    }else{ // sino esta ocupado
      this.left = new BinarySearchTree(value);  // asigno el lugar de la izquierda con mi nuevo elemento/subarbol instanciandolo
    }
  }
};

BinarySearchTree.prototype.contains = function (value) { // para verificar si el value pasado x parametro se encuentra dentro del arbol, devuelve un true o false
  if (this.value === value) {  // empiezo desde mi Root
    return true;
  }
  if(value > this.value) {  // me desplazo a buscar hacia la derecha
    if (this.right === null) { // pregunto si esta vacio
      return false;
    } else { // pregunto si no esta vacio 
      return this.right.contains(value); // llamo devuelta la funcion contains usando recursion para preguntar todo de nuevo desde el principio sobre la nueva oposicion
    }
  } else { // aca empiezo a recorrer el lado izquierdo
    if (this.left === null) { // si esta vacio
      return false;
    } else {   // si no esta vacio
      return this.left.contains(value); // llamo devuelta la funcion contains usando recursion para preguntar todo de nuevo desde el principio sobre la nueva oposicion
    }
  }
};

BinarySearchTree.prototype.size = function (){  // cuenta cuantos nodos tengo en el arbol
  
  if(this.right === null && this.left === null) return 1; // CASO BASE DE CORTE DE RECURSIVIDAD// desde root pregunto si la izq y la derecha estan vacias
  if(this.left !== null && this.right === null) return 1 + this.left.size(); // si tengo un nodo en la izq y nada en la derecha...le sumo la recursion sobre el lado izq
  if(this.right !== null && this.left === null) return 1 + this.right.size(); // si tengo un nodo en la derecha y nada  ala izq
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size(); // si tengo nodos en los dos lados
};  // cuando llega al caso de corte, todas las llamadas recursivas sobre cada nodo se van a resolver y sumar para dar un total

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if(order === 'pre-order'){ // si el orden que me pasan es igual a
    // root - izq - der
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, order); // llamadas recursivas
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }else if(order === 'post-order'){
    // izq - der - root
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value); // me guardo el valor del nodo - fijarse en el test cual es la funcion de cb
  }else{
    // in order
    // izq - root - der
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]){
  // cb = function(val){ 
  // depth.push(val); } es una funcion que esta en el test que lo que haces es solo pushear a un array

// recorro desde root de izq a derecha x niveles // tengo que ir guardando referencias a los nodos que tengo que recorrer mas adelante , para eso uso el array []
  if(this.left !== null){ // parado desde root, tenes algo en la izq?
    array.push(this.left); // antes de moverme voy a guardarlo en el array
  }

  if(this.right !== null){  // parado desde root, tenes algo a a derecha
    array.push(this.right); // antes de moverme voy a guardarlo en el array vacio
  }

  cb(this.value); // les estoy pasando mi valor de root

  if(array.length > 0){  // me desplazo hacia la izq preguntando si el array tiene elmentos adentro
    array.shift().breadthFirstForEach(cb, array); // saca el elemento de adelante  y sobre el vuelve a llamarse recursivamente
  }
};



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
