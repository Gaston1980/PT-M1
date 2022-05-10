const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function checkSeatStatus(row,number) {
    
    if ( typeof row !== "string")
        throw new TypeError("First parameter is not a string");
 // if ( row.length !== 1)
 //    throw new RangeError("First parameter must be a letter");
 // if ( row !== "A" && row !== "B" && row !== "C" && row !== "D" && row !== "E")
 //     console.log("The first parameter only takes the letters A,B,C,D and E ") 
    if ( typeof number !== "number")
        throw new TypeError("Second parameter is not a number")
//  if ( number > 4)
//     console.log("Second parameter only takes numbers 1,2,3 and 4")  
   
        const numberRow = getRowNumber(row); //invoco la funcion y guardo el valor en numberRow
        const layoutRows = layout[numberRow]; // accedo y guardo ese valor que es un array de objetos
        const seat = layoutRows[number]; // accedo y lo guardo en seat
        return seat.booked; // accedo y retorno su valor que es true o false
}

function getRowNumber(letter) {    // "A"                                "B"                   "C"
    return letter.charCodeAt(0) - 65; // A.charCodeAt(0) - 65       B.charCodeAr(0)         C.charCodeAr(0)
}                                     //       65 - 65  ----> 0       66 - 65 ----> 1          67 - 65 ------> 2
                                      // En la tabla de valores Unicode A mayuscula = 65 , B mayuscula = 66  C mayuscula = 67
                                      // En la tabla Unicode los valores de los caracteres cambian si son minusculas o mayusculas
function book(row, number) {
    
    if(checkSeatStatus(row,number) === true) return "Seat in " + row + number + " is already booked"
                            // otra opcion:  return "Seat in ${row}${number} is already booked"
    const numberRow = getRowNumber(row); //
    const layoutRows = layout[numberRow]; //
    const seat = layoutRows[number] //
    seat.booked = true // 
    return "Seat in " + row + number + " successfully booked" // otra opcion: return "Seat in ${row}${number} successfully booked"
    }
;
// ejercicio extra - no se ve en code review //
 // function resumenAsientos(){
 //     var resumen = {
 //         CantidadAsientos: 0,
 //         AsientosReservados: 0,
 //         AsientosLibres: 0,
 //         Recaudacion: 0,
 //       }
 //     var contadortotal = 0
 //     for(var i = 0; i < layout.length; i++){
 //         for( var clave in objeto) {
 //             if( objeto[clave] === "type")
 //             contadortotal = contadortotal + 1
 //             resumen.CantidadAsientos = contadortotal
 //             if( objeto[clave] === "booked" && objeto[clave] === false) 
 //         }
//      }
//  }

module.exports = {
checkSeatStatus,
getRowNumber,
book
}
