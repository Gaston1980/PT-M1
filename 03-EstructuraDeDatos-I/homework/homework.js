'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) { // siempre tengo que tenener en una recursion (1) una condicion de corte, para frenar la recursion (2) la llamada recursiva, una funcion que se va a llamar a si misma (3) Opcional: exepciones, ciertas logicas para validar 
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3! es 6 (3 * 2 * 1)
  if( n > -1 && n < 2) return 1   // xq factorial de 0! y 1! es siempre 1
  if( n < 0) return 0 // xq no existe factorial de numeros negativos, va tirar error
  return n * nFactorial(n-1) // aca se genera la Recursion
}
// 3!  --> 3 * 2!
// 2!  --> 2 * 1!
// 1!  ---> 1  ----> este es nuestro corte, cuando llego a uno

// caso base que corta la recursion
// if( n > -1 && n < 2) return 1 
// excepciones: if( n < 0) return 0    x si pasan un numero negativo
// por ultimo debe volver a llamar a la funcion y se produce la recursion


function nFibonacci(n) {  // n es la posicion 
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 6 // el elemento 6 es 8
  if ( n === 0) return 0;
  if ( n === 1) return 1;

  return nFibonacci(n -1) + nFibonacci(n-2) // aca hay dos llamadas recursivas
} 

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {
this.queue = []
}
Queue.prototype.enqueue = function(elemento) {
this.queue.push(elemento)

}

Queue.prototype.dequeue = function() {
if(this.queue.length === 0) return undefined // no hace falta aclarar esto ya que un shift devuelve un undefined si el array esta vacio
return this.queue.shift()  // para poder mostrar el valor eliminado lo retorno

}

Queue.prototype.size = function() {
  return this.queue.length 
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
}
