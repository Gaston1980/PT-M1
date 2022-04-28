'use strict'

function BinarioADecimal(num) {
var resultado = 0
var contador = num.length-1
for( var i = 0; i < num.length; i++){
  resultado += num[i] * Math.pow(2,contador)
  contador = contador - 1
}
return resultado
}

function DecimalABinario(num) {
  let entero;
  let resto;
  let binario = [];
  do{
    entero = Math.floor(num / 2);
    resto = num % 2;
    binario.unshift(resto);
    num = entero;
  }
  while((num / 2) > 0)

  return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}