
var Auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2023,
    color: 'Rojo',
    tipo: 'sedan',
    radio: ['FM', 'MP4', 'USB', 'AM']
}

document.write('<h1>Creacion de objeto Auto</h1>')
document.write('<br>');
document.write('Marca: ', Auto.marca);
document.write('<br>');
document.write('Modelo: ', Auto.modelo);
document.write('<br>');
document.write('Ano: ',Auto.anio);
document.write('<br>');
document.write('Color: ', Auto.color);
document.write('<br>');
document.write('Tipo: ', Auto.tipo);
document.write('<br>');
document.write('Radio: ', Auto.radio);

class Persona {
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = '742 de Evergreen Terrace';
    telefonao = 222334411
    email = 'amantedelacomida@gmail.com';

    trabajar(){
        return 'trabaja en la planta nuclear';
    }

    estudiar() {
        return 'Escula primaria de Sprinfield';
    }

}

const homero = new Persona();
const bart = new Persona();
const lenny = new Persona();

document.write(homero.nombre+' '+homero.apellido);
document.write('<br>');
document.write(homero.trabajar());
document.write('<br>');
document.write('<br>');
document.write('Bart ', bart.apellido);
document.write('<br>');
document.write('Estudia en: ', bart.estudiar());
document.write('<br>');
document.write('Lenny ', lenny.trabajar());


const fecha = new Date();

document.write(fecha);
document.write('<br>');

document.write('Hoy es es: ',fecha.getDate());
document.write('<br>');
document.write('El mes es: ', fecha.getMonth()+1);
document.write('<br>');
document.write('El año es: ',fecha.getFullYear());
document.write('<br>');
document.write('La hora es: ',fecha.getHours())