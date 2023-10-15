/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

* Las funciones anonimas no tienen nombre
* Se almacenan en una variable

SINTAXIS
function (parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
let nombre = 'Yonier'
let edad = 32

let saludar = function () {
    let nombre = 'Isaac'
    let edad = 58
    console.log(`Hola señor ${nombre} tienes una edad de ${edad}`)
}


// Llamando la funcion
saludar() // se muestran las variables dentro de la funcion
console.log(`Hola señor ${nombre} tienes una edad de ${edad}`) //llama a la var fuera de la funcion

console.log('==================================================')
let saludame = function () {
    nombre = 'Iris'
    edad = 62
    console.log(`Hola Sr ${nombre} tienes una edad de ${edad}`)
}
console.log('==================================================')
saludame() // se muestran las variables dentro de la funcion

// Cuando ingreso variables sin la declaración en la func lo que haces modificar las globales