// funcion declarativa
function saludar () {
    document.write('Hola a todos');
    document.write('<br>');
    despedir();
}

function saludos () {
    let saludo = prompt('INGRESE UN SALUDO!');
    alert(saludo)
}

function despedir () {
    document.write('Adios a todos')
}

saludar();
document.write('<br>')

// funciones declarativas 

function suma ( valor1, valor2 ) {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    resultado = valor1 + valor2;
    alert('Resultado: '+ resultado);
}

suma(5, 8);

function suma (a, b) {
    return a + b;
}

document.write(suma (30, 60));


function vercolor (valor){
    valor = parseInt(prompt('INGRESE VALOR 1 / 3...'));
    switch (valor) {
        case 1:
            return 'ROJO';
        case 2: 
            return 'VERDE';
        case 3:
            return 'AMARILLO';
        default:
            return 'Valor incorrecto';
    }
}

alert(vercolor())