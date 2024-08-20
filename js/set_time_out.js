let elementoSegundos = document.getElementById('tiempoElegido').value;
let elementotextoAlarma = document.getElementById('textoAlarma');
let elementoSonidoAlarma = document.getElementById('audioAlarma');

function comenzarTiempo () {
    setTimeout(tiempoCumplido, 1000*elementoSegundos);

}

function tiempoCumplido () {
    elementotextoAlarma.textContent = "ENCENDIDO";
    elementotextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();
}

function comenzarReloj () {
    setInterval(tictac,1000)
}

function tictac () {
    let tiempoActual = new Date();
    let hora = String(tiempoActual.getHours()).padStart(2,"0");
    let minutos = String(tiempoActual.getMinutes()).padStart(2,"0");
    let segundos = String(tiempoActual.getSeconds()).padStart(2,"0");
    let textHora = hora + ':' + minutos + ':' + segundos;
    elementotextoAlarma.textContent = textHora;
}