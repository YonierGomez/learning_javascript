/* Funciones, ejecuta un bloc_codigo cuando es llamada la func
SINTAXIS

function name_function(parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
function return_function (name, age) {
    let name_complete = `Tu nombre es: ${name} y tienes una edad de: ${age}`
    return name_complete
} 

//IMPORTANTE: SI TIENES UN RETURN CONFIGURADO, LA FUNCION ACABA AHÍ

// Llamando a la función
console.log(return_function('Manuel', 32))

// alert(return_function('Manuel', 32))