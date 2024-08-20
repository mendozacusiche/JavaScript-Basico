for (let i=0; i <= 5; i++) {
    document.write('vuelta n° ',i);
    document.write('<br>')    
    
}
document.write('FIN DE BUCLE!');

const frutas = ['manzanas', 'peras', 'uvas', 'naranjas'];

for (let j =0; j < frutas.length; j++) {
    document.write('Fruta: ',j,'=', frutas[j]);
}

// for in

let palabra = 'Javascript';

for ( let l in palabra ) {
    document.write(palabra[l]);
    document.write('<br>')
}