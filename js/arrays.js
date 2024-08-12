let numeros = [];
numeros = [15, 80, 650, 50, 30, -10];
document.write('Elementos: ', numeros);
document.write('<br>');
document.write('primer elemento', numeros[0]);
document.write('<br>');
numeros[0] = 14;
document.write('Elementos: ', numeros.length)

let frutas = ['manzana', 'pera', 'melon', 'sandia', 'durazno', 'naranjas'];
document.write('<br>');
document.write('Frutas: ',frutas);

// metodos de los ARRAYS

// ver cantidad de elementos

document.write('Cantidad: ',frutas.length);
document.write('<br>');

// ultimos elemento
document.write('Ultimo elemento: ', numeros[numeros.length - 1]);
document.write('<br>');

// Array de tipo texto
document.write('En string: ', numeros.toString());
document.write('<br>')

// unir tipos de arrays
let letras = ['a', 'b', 'c', 'e'];
let numeros2 = [1, 2, 3, 4];
document.write('Alfanumerico: ', letras.concat(numeros2));

// Borrar el ultimo elemento de array
numeros.pop();
document.write(numeros);
document.write('<br>');

// agregar elemento al final
numeros.push(100);
document.write(numeros);
document.write('<br>');

// Eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

// insetar elemento al inicio
numeros.unshift(200);
document.write(numeros);
document.write('<br>');

// Eliminar elementos a partir de un punto
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');

// como copiar un array
let cantidad = [100, 200, 500, 600, 800];
let copia = cantidad.slice(1,4);
document.write('Array copia: ',copia);

// ordenar array
let objetos = ['carro', 'alfa', 'planeta', 'zorro'];
document.write(objetos.sort);
document.write('<br');

// orden inverso
document.write(objetos.reverse());
document.write('<br>')

// crear array con valores inalterables
const autos = ['Toyota', 'Chevrolet', 'BMW'];
document.write('Autos: ',autos);
document.write('<br>');

