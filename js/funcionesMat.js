// redondea al entero proximo 
var precio = Math.raund(399.53);

document.write('precio redondeado: ',precio);
document.write('<br>');

// redondear sin importar el deciman hacia arriba
var precio = Math.ceil(299.9);
document.write('precio redondeado: ', precio);

// redondea sin importar el decimal hacia abajo
var precio = Math.floor(540.9);
document.write('precio redondeado', precio);

// calcula el seno de un angulo
var seno = Math.sin(45);
document.write('seno de 45: ', seno);

// calcular el exponencial de un numero
var expo = Math.exp(2);
document.write('exponencial de 2: ', expo);
document.write('<br>');

// Calcular el logaritmo de un número
var logaritmo = Math.log(10);
document.write('logaritmo de 10:', logaritmo);
document.write('<br>');

// varlor absoluto de un numero
var absoluto = Math.abs(-10);
document.write('Valor absoluto de -10: ',absoluto)

// calcular el valor maximo de una secuencia de números
var maximo = Math.max(10, 50, 300, 55,1);
document.write('el maximo es: ',maximo);
document.write('<br>');

// Calcular el minimo de la secuencia
var minimo = Math.min(10, 50, 600, 1, 22);
document.write('menor valor es: ',minimo);
document.write('<br>');

// mostrar un numero aleatorio
var aleatorio = Math.round(Math.random()*10);
document.write('valor aleatorio: ',aleatorio)
document.write('<br>');

// raiz cuadrada de un número
var valor = Math.sqrt(81);
document.write('raiza cuadrada de 81: ',valor)
document.write('<br>');

// Calcular el exponente de un número
var exponente  = Math.pow(4, 2);
document.write('4^ 2 es :',exponente);