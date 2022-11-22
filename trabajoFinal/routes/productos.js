import  Express  from 'express';
import { Contenedor } from '../contenedor/contenedor';
const rutaProductos = express.router();

const contenedor = require ('../contenedor/contenedor.js'); 

const productos = new contenedor('../db/productos.txt')

rutaProductos.get('/',async(peticion,respuesta)=>{
    const listaProd = await productos.getAll()
    respuesta.JSON(listaProd)
});

rutaProductos.get('/:id',async(peticion,respuesta)=>{
    const productos = await productos.getAll();
    const porId = await productos.getById()
    respuesta.JSON(productos||porId)
});

rutaProductos.post('/',(peticion,respuesta)=>{
    const producto = peticion.body;
    const totalProds = productos.getAll();
    productos.push(producto);
    productos.save(producto);
    respuesta.render('formulario',{productos:totalProds})
});

rutaProductos.put('/:id',(peticion,respuesta)=>{
    const porId = new this.productos.id
    respuesta.json(porId)
});

rutaProductos.delete('/:id',(peticion,respuesta)=>{
    const borrarPorId = productos.deleteById;
    respuesta.JSON(borrarPorId)
});

export {rutaProductos};