import  Express  from 'express';
import { Contenedor } from '../contenedor/contenedor';
const rutaCarrito = express.router();

const contenedor = require ('../contenedor/contenedor.js'); 

const carritos = new contenedor('../db/carritos.txt')

rutaCarrito.get('/',async(peticion,respuesta)=>{
    const listaCarrito = await carritos.getAll()
    respuesta.JSON(listaCarrito)
});

rutaCarrito.post('/',(peticion,respuesta)=>{
    const carritoNuevo = new carritos([]); 
    const suId = carritoNuevo.push.id(id)
    respuesta.json(suId)
});

rutaCarrito.delete('/:id',(peticion,respuesta)=>{
    const carrito = carritos([]);
    const eliminarCarrito = carritos.splice(carrito);
    respuesta.JSON(eliminarCarrito)
});

rutaCarrito.get('/:id/productos',(peticion,respuesta)=>{
    const conseguirId = productos.getById(id);
    const sumarPorId = carritos.push(conseguirId)
});

rutaCarrito.post('/:id/productos',async(peticion,respuesta)=>{
    const porId = await productos.getById();
    const sumar = await carritos.push(porId);
    respuesta.JSON(sumar)
});

rutaCarrito.delete('/:id/productos/:id_prod',(peticion,respuesta)=>{
    const porId = borrar.deleteById(id);
    respuesta.JSON(porId)
});

export {rutaCarrito};