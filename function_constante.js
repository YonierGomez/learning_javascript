/* Funciones, ejecuta un bloc_codigo cuando es llamada la func

* Las funciones anonimas no tienen nombre
* Se almacenan en una variable

SINTAXIS
function (parametros) {bloque_codigo}
*/

// Declarar funcion param_function y pasar param y validar el tipo de dato
const lab_func = function (name, age) {
    const name_complete = `Tu nombre es: ${name} y tienes una edad de: ${age}`
    return name_complete
} 

//IMPORTANTE: SI TIENES UN RETURN CONFIGURADO, LA FUNCION ACABA AHÍ

// Llamando a la función a través de la variable, recuerda que las func anon no tienen nombre
console.log(lab_func('Manuel', 32))

//AUTO LLAMAR FUNCION ANONIMA