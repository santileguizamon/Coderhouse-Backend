import  Express  from 'express';
const app = express();

const PORT = process.env.PORT || 8080;
const conexionServidor = httpServer.listen(PORT,() =>{
    console.log(`Se esta escuchando en el puerto: ${conexionServidor.address().port}`)
});
servidor.on('error', error => console.log(`Error: ${error}`));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

import { rutaProductos } from "./routes/productos.js";
import { rutaCarrito } from "./routes/carrito.js";

app.use('/api/productos', rutaProductos);
app.use('/api/carrito', rutaCarrito);