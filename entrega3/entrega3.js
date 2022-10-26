const http = require('http');
const express = require('express');
const PORT = 8080;
const app = express();

const conexionServidor = app.listen(PORT,() =>{
    console.log(`Se esta escuchando en el puerto: ${conexionServidor.address().port}`)
});

app.get('/productos',(peticion,respuesta)=>{
    respuesta.send([productos])
})

app.get('/productosRandom',(peticion,respuesta)=>{
    respuesta.send(Random.productos)
})