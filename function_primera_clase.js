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

// Llamando a la función, si la guardo con () estoy llamando a la funcion
let ejecutado = return_function('Manuel', 32)


// Si la guardo sin parámetro, estoy guardandando la funcion, por ende puedeo pasar param
let ejecutar = return_function

/* HAY QUE TENER EN CUENTA QUE return_function('Manuel', 32) se convierte en un tipo de dato
Por ende se puede guardar en una variable
*/

