/* Metodos, modifican el comportamiento de una variable o sus valores

SINTAXIS

variable.metodo()
*/

// Usando .find - debemos pasar una funct
console.log('==========================================================')
console.log('Usando el método .find() para simplificar')
let listnum = [9, 30, 23, 10, 12, 19, 21, 54, 834, 10, 19, 67, 23, 1566, 67, 7878, 4545]

let num_dato = listnum.find(l_num => l_num > 20)

console.log(num_dato)

// Esto por defecto muestra el primer dato que sea mayor a 20