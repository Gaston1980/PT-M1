//# Ejercicios

//## JavaScript

//### Scope & Hoisting

//Determiná que será impreso en la consola, sin ejecutar el código.

//> Investiga cuál es la diferencia entre declarar 
//una variable con `var` y directamente asignarle un valor:
//  
// Cual es la diferencia al declarar con var y con let ?? Que es el block scope de let??
// var :
// let :
// block scope: 

//```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { // function expression
    //           8   9  10
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
//               8  9  10
    b = a; // 8
    console.log(b);// 8
    b = c; // 10
    var x = 5;
  }
  f(a,b,c); // recibe los argumentos de c() xq esta dentro del contexto de c() y los busca ahi
  console.log(b);// 9  xq estamos en el contexto de c()
}
c(8,9,10); // se ejecuta c  // contexto global
console.log(b);//10  contexto global
console.log(x);// 1  contexto global

//```javascript
console.log(bar); // undefined //xq Hoisting reserva lugar en la memoria solo para declaraciones de variables o funciones, no asignaciones de valor
console.log(baz); // Error // Rompe, corta la ejecucion, retorna " baz is not defined"
foo(); // "Hola" // xq hoisting guarda las declaraciones de funciones completas {}
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2; // lo lee como una reasignacion de valor

//```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);// "Franco" // todo esta en el contxto global, se re asigna el valor de la variable

//```javascript
var instructor = "Tony";
console.log(instructor);// "Tony" // xq es el valor asignado a la variable en el contexto global donde estoy
(function() { // IIFE 
   if(true) {
      var instructor = "Franco";
      console.log(instructor);// "Franco" // xq es el valor asignado en el contexto de la funcion
   }
})();
console.log(instructor);//"Tony" // xq estoy en el contexto global y se refiere al valor asignado en ese contexto


//```javascript
var instructor = "Tony"; //  todo esta en contexto global
let pm = "Franco"; // variable declarada en bloque 1
if (true) {
    var instructor = "The Flash"; // reasigna valor de la variable declarada anteriormente
    let pm = "Reverse Flash"; // variable declarada en bloque 2
    console.log(instructor); // "The Flash" // xq al estar en el mismo contxto, el valor fue re asignado
    console.log(pm); // "Reverse Flash" // esta es una variable distinta que vive en este bloque, no es reasignacion
}
console.log(instructor);// "The Flash" // xq el valor fue reasignado ( al usar var)
console.log(pm);// "Franco" // xq es otra variable declarada en otro bloque ( eso por usar let)

//### Coerción de Datos

//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

//```javascript
6 / "3" --> 2  // xq hay un operador artimetico que no es el +, se convierte el tipo de datos a numero y retorna un numero, Nan o Infinity
"2" * "3" --> 6 // xq hay un operador aritmetico que no es el +, se convierte los datos a numeros y retorna numero, Nan o Infinity
4 + 5 + "px" --> "9px" // segun la tabla de asociatividad el + se resuelve de izq a der
// (4 + 5) + "px"
//    9    + "px" --> "9px"  en el operador aritmetico + si hay un string, siempre va retornar un string concatenado
"$" + 4 + 5 --> "$45" // segun la tabla de asociatividad el + se resuelve de izq a der
// ("$" + 4) + 5
//    "$4"   + 5 --> "$45" en el operador aritmetico + si hay un string, siempre va retornar un string concatenado
"4" - 2 --> 2  // xq hay un operador artimetico que no es el +, se convierte el tipo de datos a numero y retorna un numero
"4px" - 2 --> Nan  // xq hay un operador aritmetico que no es el +, se convierte los datos a numeros y retorna numero, Nan o Infinity
// Number("4px") - 2 
//    Nan  - 2  --> Nan
7 / 0 --> Infinity // Todo numero divido por 0 da infinito
{}[0] --> [0] // no se usa
parseInt("09") --> 9 // Convierte un string a numero como lo hace  Number("09")
5 && 2 --> 2 // cuando utilizo el operador logico &&, se convierten los tipos de datos implicitamente a booleanos,
// true && true --> 2  xq cuando todos son true, retorna el valor del ultimo operando
2 && 5 --> 5 // cuando utilizo el operador logico &&, se convierten los tipos de datos implicitamente a booleanos,
// true && true --> 5 xq cuando todos son true, retorna el valor del ultimo operando
5 || 0 --> 5 // cuando utilizo el operador logico ||, se convierten los tipos de datos implicitamente a booleanos,
// true || false --> 5 xq solo es true si uno o mas de los operandos es true y retorna el valor del operando true
0 || 5 --> 5 // cuando utilizo el operador logico ||, se convierten los tipos de datos implicitamente a booleanos,
// false || true --> 5 xq solo es true si uno o mas de los operandos es true y retorna el valor del operando true
[3]+[3]-[10] --> 23  // se aplica Object to primitive conversion
// ([3] + [3]) - [10]  por la tabla de asociatividad de izq a derecha al tener misma precedencia
// obj.toString() de cada objeto para convertir objects a primitive: obj = [3]  obj.toString() --> "3"
// ("3" + "3") - "10"
//     "33"   - "10"  xq hay un operador artimetico que no es el +, se convierte el tipo de datos a numero y retorna un numero, Nan o Infinity
//      33   - 10   --> 23
3>2>1 --> false // al usar operadores de comparacion, se convierten implicitamente los tipos de datos a numeros y retorna true o false
// (3>2) > 1 
//  true > 1
//   1 > 1  --> false 
//[]== ![] --> true // super raro, no se usa
// [] == false
// Operand A is an Object and Operand B is a Boolean, 
//so the actual comparison performed is going to be ToPrimitive(A) == ToNumber(B)
// obj = [] obj.toString --> ""  Number(false) --> 0
// "" == 0
// false == false  --> true         esto es asi?????????????

//### Hoisting

//¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

//```javascript
function test() {
   console.log(a); //undefined // hoisting : sube la declaracion de la variable dentro de la funcion sin su asignacion de valor
   console.log(foo()); // 2 // invoco foo() hoisting : la declaracion de la funcion se sube completa

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// undefined
// 2



//Y el de este código? :

//javascript
var snack = 'Meow Mix';

function getFood(food) { // (food)recibe false
    if (food) { // false
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

// undefined // , no se entra al if xq es false entonces no usa el valor declarado dentro del if, se retorna el segundo return snack que x el hoisting, no guardo el valor solo la declaracion de la variable en el global
// 1- conexto global
// ejecuto getfood


// This

//¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

//javascript
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

console.log(obj.prop.getFullname()); // Aca tengo objetos anidados x eso obj.prop
//  Aurelio de Rosa // xq this apunta al obj prop
var test = obj.prop.getFullname; // aca no se invoca
// console.log(test)  fucntion() { return this.fullname} this seria aca === window
console.log(test()); // "Juan Perez" // xq aca invoco la funcion suelta, sacada del objeto, entonces
// este this apunta a window, al objeto global

// ### Event loop

// Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

//javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000); // va para webapis
   setTimeout(function() { console.log(3); }, 0); // va para webapis
   console.log(4);
}

printing(); // se invoca

// 1 // se ejecuta el console.log(1)
// 4
// 3   se ve primero este xq el setimeout es mas corto que el otro setimeout
// 2