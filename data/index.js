// configurar express 
const express = require('express');
const app = express();

app.set('port',3000);
app.listen(3000);

// componente de MySql
var mysql = require('mysql');

// establecer los parametros de conexion
var mi_conection = mysql.createConnection({
    // enviar cuatro parametros
    host: 'localHost',
    user:'root',
    password:'1234',
    database: 'base_001'
});

// conexion a la base de datos
mi_conection.connect();
//agregar nuvevo registro

mi_conection.query('insert into clientes values(1, "Pedro", 1, 12717597, "515 y32 n°1022")', function(error, resultado){
    if(error) throw error;
    console.log(resultado);
});

// realizar consulta a la tabla
mi_conection.query('select * from clientes', function(error, filas){
    if(error) throw error;
    console.log(filas);
});

mi_conection.query('update clientes set direccion = "sin numero" where idcliente = 1', function(error, resultado){
    if(error) throw error;
    console.log(resultado);
});

mi_conection.query('select * from clientes', function(error, filas){
    if(error) throw error;
    console.log(filas);
});

// eleiminar registros de la tabla
mi_conection.query('delete from clientes where idcliente = 1', function(error, resultado){
    if(error) throw error;
    console.log(resultado);
});

mi_conection.query('select * from clientes', function(error, filas){
    if(error) throw error;
    console.log(filas);
});



// cerrar conexion con la base de datos
mi_conection.end()