/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

* Funciones flecha o arrow function
* =>

SINTAXIS
function (parametros) {bloque_codigo}
*/

// Declarar funcion suma y resta normales
const func_suma = function (a, b) {
    return a+b
}

const func_restar = function (c, d) {
    return c-d
}

// Declarar funcion suma y resta normales pero con func flecha
const suma = (a, b) => a+b
const restar = (c, d) => c-d
const saludar = nombre => `Hola Mr ${nombre}`


// Llamar la func
console.log(suma(10, 20))
console.log(restar(40, 20))
console.log(saludar('Yonier Manuel'))

/* Explicación
* Se remueve la palabra "function"
* Se dejan únicamente los parámetros
* Se remueve {} que servía para el bloque de código porque no tiene mucha lógica
* Se pasa lo que se requiere retornar, no es necesario "return"
* Si la func recibe solo 1 param no es necesario los paréntesis

IMPORTANTE: Si la funcion no requiere param se deben poner pero vacios
*/

// Creamos funcion flecha con lógica, es decir se añaden los {bloque_codigo}
const saludandome = nombre => {
    if (typeof nombre === "string") {
        console.log(`Hola Mr ${nombre}`)
    } else {
        console.error(`Tipo de dato Nombre ${nombre} errado`)
    }
}

// Llamar la funcion
saludandome('Iris')
saludandome(20)