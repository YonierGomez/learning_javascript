/* Ciclos, bucles, loop

SINTAXIS
while (condicion) {
    bloque_codigo
    incremental
}

* Tenemos 15 juguetes
* Mientras que juguetes sea mayor que 0
* Regalamos un jueguete
* Descontamos un jueguete
* El ciclo finaliza cuando ya no tengamos juguetes
*/

let juguetes = 15

while (juguetes > 0) {
    juguetes--
    console.log(`Regalamos un juguete, restante: ${juguetes} `)
}
