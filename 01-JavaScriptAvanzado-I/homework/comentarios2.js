
// ACA VUELVO A REALIZAR LOS EJERCICIOS PERO SOLO //
// EJERCICIO 1 // SCOPES - CONTEXTOS
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);// 10
  console.log(a);// 8
  var f = function(a, b, c) {
    b = a;
    console.log(b);// 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);// 9 xq estamos en el contexto de c()
}
c(8,9,10);
console.log(b);// 10
console.log(x);// 1

// EJERCICIO 2 // HOISTING
console.log(bar); // UNDEFINED
console.log(baz); // ERROR - BAZ IS NOT DEFINED Y CORTA LA EJECUCION, NO SIGUE CON FOO()
foo(); // NO SE EJECUTA DEBIDO AL ERROR
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

// EJERCICIO 3// SCOPES -CONTEXTOS
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// "FRANCO"

// EJERCICIO 4// scopes -contextos
var instructor = "Tony";
console.log(instructor);// "TONY"
(function() { // es un IFFE, una funcion anonima, sin nombre, que al final se termina auto ejecutando 
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // "FRANCO"
   }
})();
console.log(instructor);// "Tony"

// ejercicio 5// scopes - contextos
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);// "The flash"
    console.log(pm);// " Reverse Flash"
}
console.log(instructor);// "The Flash" fue redeclarada dentro del if y como fue declarada con var puede ser redeclarada desde dentro de if 
console.log(pm);// "Franco" mantiene su scope de bloque xq es let

// EJERCICIO 6 //  HOISTNG
function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
 // UNDEFINED // aunque var a este declarada dentro de una funcion, el interprete sube solo la declaracion de variable a sin su asignacion de valor
 // 2

 // EJERCICIO 7// HOISTING
 var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // al poner el false, no va entrar al if, por lo que va retornar el segundo return snack que se refiere a la variable declarada en el contexto global, pero como dijimos que en hoisting el interprete solo guarda en memoria la declaracion sin su valor, va retornar undefined.
// UNDEFINED

// EJERCICIO 8//  THIS
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());
// "AURELIO DE ROSA"  // ACA EL THIS SE REFIERE AL OBJETO PROP
var test = obj.prop.getFullname;
console.log(test());
// "JUAN PEREZ" // ACA EL THIS SE REFIERE AL CONTEXTO GLOBAL Y ENCUENTRA LA VARIABLE FULLNAME DECLARADA EN EL GLOBAL

// EJERCICIO 9 // EVENT LOOP
function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0); // AUNQUE TENGA 0 MILLISECONDS DE ESPERA IGUAL LO MANDA AL WEBAPIS Y QUEDA EN EL ORDEN DE ESPERA 1 EN EL CALLBACK QUEUE
    console.log(4);
 }
 
 printing();
 //1
 //4

 //3
 //2