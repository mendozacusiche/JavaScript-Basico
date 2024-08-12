// tipos de dato String
let nombre = 'Jose';
// number
let edad = 23;
// number
let altura = 1.65;
// boolean
let tieneTarjeta = false;
// null: Representa la ausencia intencional de cualquier 
// objeto o valor. Es un tipo de dato primitivo que tiene 
// un solo valor: null.
/*
    undefined: Representa una variable que ha sido declarada 
    pero no se le ha asignado un valor. Es también un tipo de 
    dato primitivo.
 */
let esNulo = null;
// tipos de Referencias(objetos)
let persona = {nombre: 'Juan', edad:30}
/* 
Resumen:

    Primitivos: number, string, boolean, null, undefined, symbol, bigint
    Referencias: object (incluye arrays, funciones, fechas, etc.)
*/

/*
    Los tipos de datos primitivos son inmutables, lo que significa 
    que su valor no puede cambiar. Los tipos de referencia, como los
    objetos, son mutables, lo que significa que su contenido puede 
    ser modificado después de que se hayan creado.
 */


document.write(nombre);
document.write('<br>');
document.write(edad);
document.write('<br>');
document.write(altura);
document.write('<br>');
document.write(tieneTarjeta)
document.write('<br>');
document.write(esNulo)
document.write('<br>');
document.write(persona.nombre)

