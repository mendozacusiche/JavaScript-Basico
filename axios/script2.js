let datos = {
    title: 'New POST',
    body: 'Mi Contenido'

}

let mitoken = 'Este_es_mi_token';

axios.interceptors.request.use(
    (config)=>{
        config.headers.Authorization = 'Bearer $(mitoken)';
        return config;
    },(error) =>{
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (respuesta) => {
        respuesta.data.customField = 'Nuebo campo';
    return respuesta;
    },(error) => {
        return Promise.reject(error);
    }
);

let pedido1 = axios.get('https://api.ejemplo.com/data1')
let pedido2 = axios.get('https://api.ejemplo.com/data2')
let pedido3 = axios.get('https://api.ejemplo.com/data3')

axios.all([pedido1, pedido2, pedido3])
.then(axios.spread((res1, res2, res3)=>{
    // codigo


}))
.catch(error => {
    //manejar errores
})
/*
axios.post('https://jsonplaceholder.typicode.com/posts', datos)
    .then(respuesta => console.log('El post fue creado con exito',respuesta.data))
    .cath(error => console.log(error));
    */