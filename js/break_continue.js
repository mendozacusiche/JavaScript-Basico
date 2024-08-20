 for(let i = 0; i < 10; i++) {
    document.write(i);
    document.write('<br>');

    if ( i == 3 ) {
        document.write('Aqui es la vuelta: ', i)
        document.write('<br>');
        break;
    }
 }


 // continius 

 let palabra = 'Javascript';
 let resultado = '';

 for ( let f in palabra ){
    if ( palabra[f] == 'a' ){
        continue;
    }else{
        resultado += palabra[f];
    }
 }

 document.write(resultado);
 