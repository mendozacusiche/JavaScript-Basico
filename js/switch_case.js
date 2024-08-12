let valor;

valor = parseInt(prompt('Ingrese valor entre 1 y 3'));


switch (valor){
    case 1:
        document.write('ingreseo uno');
        break;
    case 2:
        document.write('Ingreso dos');
        break;
    case 3:
        document.write('Ingreso tres')
        break;
    default:
        document.write('no es número válido');
        break;
}

let color 

color = prompt('Ingrese un color: Rojo/Verde/Azul');

switch (color) {
    case rojo:
        document.write('Ingreso el color rojo');
        break;
    case verdde:
        document.write('Ingreso el color verde');
        break;
    case azul:
        document.write('Ingreso el color azul');
        break;

    default:
        document.write('no ingreso un color')
        break;
}