async function crearPost(titulo, contenido){
    try{
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId: 1,
            }),
            
        })

        if(!respuesta.ok){
            throw new Error("Error en al solicitud:  "+respuesta.statusText);
        }

        let data = await(respuesta.json());
        console.log("REGISTRO CREADO: ", data);
    }catch(error){
        console.error('Algo salió mal crear el registro: ',error);
    }
}

crearPost("Mititlo de ejemplo", "Contenido de ejemplo");

