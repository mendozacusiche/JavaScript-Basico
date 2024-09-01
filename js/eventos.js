let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");
let enlace = document.getElementById("enlace1");
let texto1 = document.getElementById("mitexto");
let menu = document.getElementById('mimenu');
let boton2 = document.getElementById('miboton');


/*
function muestramensaje(){
    alert("Boton presionado!");
}

function mensaje2(){
    alert("SOY UN MOUSEOVER");
}

boton.addEventListener('mouseover', mensaje2)
boton.addEventListener('click', muestramensaje);


boton.addEventListener('click', function(){
    alert("Presionate el boton " );
})*/
function verificar_nuemero(event){

    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    }
}

function bloqueo_enlace(event){
    event.preventDefault(); 
    alert('Enlace deshablitado')
}

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}


div1.addEventListener('click',mostrarMensaje ); 
enlace.addEventListener('click', bloqueo_enlace);
texto1.addEventListener('keydown', verificar_nuemero);

texto1.addEventListener('keyup', function(event){
    console.log('Entrada del usuario: '+ event.target.value);
});

texto1.addEventListener('keypress', function(event){
    console.log('Caracter ingresado: '+ event.key);
})

// boton2.addEventListener('click', function(){
//     menu.style.display ='block';
// })

boton2.addEventListener('mouseover',function(){
    menu.style.display = 'block';
});

boton2.addEventListener('mouseout',function(){
    menu.style.display = 'none';
});

document.addEventListener('mousemove', function(event){
    console.log('Posición x:'+ event.clientX + ' - ' + ' -posición Y: '+ event.clientY);
});

let socket = new WebSocket('ws://localhost:8080');
let mensajeingresado = document.getElementById ('mensajeIngresado');
let botonenviar = document.getElementById('botonenviar');

function mostrarMensaje(contenido){
    let contenedorMensaje =document.getElementById('mensajesChat');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedorMensaje.appendChild(elementoMensaje);
}

botonenviar.onclick = function(){
    let mensaje = mensajeingresado.value;
    mostrarMensaje(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarMensaje(mensaje);
}