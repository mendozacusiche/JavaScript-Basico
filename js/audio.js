let audio = document.getElementById('audio');
let lista = document.getElementById('listaCanciones');

lista.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = lista.value;
    console.log(cancionElegida);

    audio.src = cancionElegida;
    audio.play();

    let evento = new CustomEvent('cambioDeCancion');
    audio.dispatchEvent(evento);
}

audio.addEventListener('CamvioDeCancion', mostrarCancion);

function mostrarCancion(){
    console.log('Canción actual: '+ listaCanciones.value);
}