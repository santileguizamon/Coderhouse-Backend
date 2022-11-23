import  Express  from 'express';
import { Contenedor } from '../contenedor/contenedor';
const rutaProductos = express.router();

const contenedor = require ('../contenedor/contenedor.js'); 

const productos = new contenedor('../db/productos.txt')

const privilegio = (peticion,respuesta,next) =>{
    const admin = peticion.headers.admin;
    if(admin === true){
        next()
    }else{
        respuesta.status(401).send({error: -1, descripcion :` ruta ${peticion.url} metodo ${trace.url} no autorizada}`})
    }
}

rutaProductos.get('/',async(peticion,respuesta)=>{
    const listaProd = await productos.getAll()
    respuesta.JSON(listaProd)
});

rutaProductos.get('/:id',async(peticion,respuesta)=>{
    const productos = await productos.getAll();
    const porId = await productos.getById()
    respuesta.JSON(productos||porId)
});

rutaProductos.post('/',privilegio,(peticion,respuesta)=>{
    const producto = peticion.body;
    const totalProds = productos.getAll();
    productos.push(producto);
    productos.save(producto);
    respuesta.render('formulario',{productos:totalProds})
});

rutaProductos.put('/:id',privilegio,async(peticion,respuesta)=>{
    const idProducto = parseInt(peticion.params.id);
    const producto = peticion.body;
    producto.id = idProducto;
    await productos.deleteById(idProducto);
    await productos.update(producto);

    respuesta.json(producto)
});

rutaProductos.delete('/:id',privilegio,(peticion,respuesta)=>{
    const idProducto = parseInt(peticion.params.id);
    const borrarPorId = productos.deleteById();
    respuesta.JSON(borrarPorId)
});

export {rutaProductos};