// operadores && (and) 
let continente, edad;

continente = prompt('Ingrese su continente...');
edad = prompt('ingrese su edad...');

if(continente == 'America' && edad >= 18){
    document.write('Eres un adulto americano');
}else{
    document.write('o no eres adulto, o no eres americano');
}

// operador or ||

let dia, mes, anio;

dia = prompt('Ingrese dia...');
mes = prompt('Ingrese mes...');
anio = prompt('Ingrese año...');

if (mes == 1 || mes == 2 || mes == 3){
    document.write('Pertenece al primer trimestre!');
}else {
    document.write('No pertenece al primer trimestre');
}