/* Funciones, ejecuta un bloc_codigo cuando es llamada la func
SINTAXIS

function name_function(parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
function c_param_function (myname) {
    if (typeof myname === "string") {
        console.log(`Hi, Mr ${myname} from conditional`)
    } else {
        console.log('Tenga cuidado con el tipo de dato')
    }
} 

// Llamando a la función
c_param_function('Manuel')
c_param_function(10)