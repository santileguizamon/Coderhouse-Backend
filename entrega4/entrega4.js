const { application } = require("express");

const express = require (express);
const {Router} = express;
const PORT = 8080;
const app = express();
const conexionServidor = app.listen(PORT,() =>{
    console.log(`Se esta escuchando en el puerto: ${conexionServidor.address().port}`)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const rutaProds = Router()


class Contenedor {
    constructor(productos) { this.productos = productos; }

    async save(objeto) {
        let id = 1;
        this.productos.array.forEach((element, index) => {
            if (element.id >= id) {
                id = element.id + 1;
            }
        })
        objeto.id = id;
        this.productos.push(objeto);
        return id
    };
    async getById(id) {
        let objetoSelect = null;
        this.productos.forEach(element => {
            if (element.id == id) {
                objetoSelect = element;
            }
        })
        return objetoSelect
    };
    async getAll() {
        return this.productos
    }
    async deleteById(id) {
        let indexSelect = -1;
        this.productos.forEach((element, index) => {
            if (element.id == id) {
                indexSelect = index;
            }
        });
        if (indexSelect != -1) {
            this.productos.splice(indexSelect, 1);
        }
    }

}

const productos = new Contenedor([]);

rutaProds.get('/',async(peticion,respuesta)=>{
    const all =  productos.getAll();
    respuesta.json(all);
});

rutaProds.get('/:id',async(peticion,respuesta)=>{
    const id = parseInt(peticion.params.id);
    const producto = productos.getById(id)
    if(producto){respuesta.json(productos.id)}
    else {
        respuesta.status(404);
        respuesta.json({error:'producto no encontrado'});
    }
})

rutaProds.post('/',(peticion,respuesta)=>{
    const agregarProd = new productos([]) ;
    const actualizar = agregarProd.push.id(id)
    respuesta.json(actualizar)
})

rutaProds.put('/:id',(peticion,respuesta)=>{
    const porId = new this.productos.id
    respuesta.json(porId)
})

rutaProds.delete('/:id',(peticion,respuesta)=>{
    const borrarPorId = productos.deleteById;
    respuesta.json(borrarPorId)
})

application.use('/api/productos', rutaProds);
application.use(express.json());
application.use('/static',express.static(__dirname + '/public'));