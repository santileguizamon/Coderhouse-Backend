const express = require('express');
const app = express();
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const Contenedor = require('./contenedor/contenedor');

const PORT = 8080;
const publicRoot = './public';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const conexionServidor = httpServer.listen(PORT,() =>{
    console.log(`Se esta escuchando en el puerto: ${conexionServidor.address().port}`)
});
servidor.on('error', error => console.log(`Error: ${error}`));

const httpServer = new HttpServer(aplicacion);
const io = new IOServer(httpServer);

app.use(express.static(publicRoot));

const productos = new Contenedor('./src/db/productos.txt');

app.get('/',(peticion,respuesta) =>{
    respuesta.send('index.html',{root: publicRoot})
})

io.on('connection', async (socket)=>{
    console.log('nuevo cliente conectado')
})

const listaProd = await productos.getAll();
socket.emit('nueva-conexion',listaProd);

socket.on('new-prod',(data)=>{
    productos.save(data);
    io.sockets.emit('producto', data)
})