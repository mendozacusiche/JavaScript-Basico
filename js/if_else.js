let nombre, edad;

nombre = pronpt('INGRESE SU NOMBRE...');
edad = pronpt('INGRESE SU EDAD...');
edad = parseInt(edad);

if (edad >= 18){
    document.write('BIENVENIDO: ', nombre);
}else{
    if(edad < 18){
        document.write(nombre,' Eres menor de edad');
    }else{
        document.write('No has ingresado datos');
    }
    
}

