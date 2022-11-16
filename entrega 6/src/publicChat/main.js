const express = require('express');

const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const PORT = 8080;
const publicRoot = './publicChat';

app.use(express.static(publicRoot))

httpServer.listen(port, function() {
    console.log('Servidor corriendo en http://localhost:8080');
  });

 
 io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
  
    
    socket.emit('messages', messages);
  
    
    socket.on('new-message',data => {
      messages.push(data);
      io.sockets.emit('messages', messages);
    });
  });