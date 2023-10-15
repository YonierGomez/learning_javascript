/* Metodos, modifican el comportamiento de una variable o sus valores

SINTAXIS

variable.metodo()
*/

// MÉTODOS INCLUDES - SOME - EVERY

// Usando .includes - debemos pasar el numero a validar si está en la lista
console.log('==========================================================')
console.log('Usando el método .incluse() para simplificar')
let listnum = [9, 30, 23, 10, 12, 19, 21, 54, 834, 10, 19, 67, 23, 1566, 67, 7878, 4545]

let num_dato = listnum.includes(20)

console.log(num_dato)

// Nos arroja un tipo de dato bool

// Usando .some(func) - Hace lo mismo de includes pero debemos pasar una func y permite lógica
console.log('==========================================================')
console.log('Usando el método .some() para simplificar')
let num = [9, 30, 23, 10, 'neytor']

let dato = num.some(lnum => typeof lnum === 'string' )

console.log(dato)

// Usando .every(func) - Hace lo mismo de includes pero debemos pasar una func y permite lógica
// Valida si todos los elementos cumplen con una condición
console.log('==========================================================')
console.log('Usando el método .every() para simplificar')
let nums = [9, 30, 23, 10]

let datos = nums.every(lnums => typeof lnums === 'number' )

console.log(datos)