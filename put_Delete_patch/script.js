// Metodo PUT
/*fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method:'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        title: 'Nuevo titulo',
        body: 'Nueva descripción'        
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));


// METODO DELETE
fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method:'DELETE',
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));

//  Medodo PATCH para modificar solo un registro
fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method:'PATCH',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        title: 'ABELARDO',
              
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));

let user = 'usuario01';
let password = '123456';

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET',
    credentials:'include',
    headers:{
        'Authorization':'Basic'+ btoa(),
        'Content-Type': 'aplication/json'
    }
})
*/

let token = 'miToken';
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET',
    credentials:'include',
    cache:'no-cache',// 'no-store', 'reload', 'force-cache', 'only-if-Cached'
    redirect:'manual', // 'error', 'manual','follow'
    headers:{

        'Authorization':'Bearer' +token,
        'Content-Type': 'aplication/json'
    }
})
.then(response => {
    if(response.type === 'opaqueredirect'){
        let nuevaUbicacion = response.headers.get('location');
        console.log('Redirigiendo A: ', nuevaUbicacion);
    }else{
        return response.json();
    }
})
.then(data => console.log(data))
.catch(error => console.error('Error: ', error));