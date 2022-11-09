const { application } = require("express");

const express = require (express);
const PORT = 8080;
const app = express();
const conexionServidor = app.listen(PORT,() =>{
    console.log(`Se esta escuchando en el puerto: ${conexionServidor.address().port}`)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs')

application.use('/static',express.static(__dirname + '/public'));



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

app.get('/productos',async(peticion,respuesta)=>{
    const all =  productos.getAll();
    respuesta.render('lista',{productos:all});
});

app.post('/productos',(peticion,respuesta) =>{
    const producto = peticion.body;
    const totalProds = productos.getAll();
    productos.push(producto);
    productos.save(producto);
    respuesta.render('formulario',{productos:totalProds})
})

app.get('/',(peticion,respuesta) =>{
    respuesta.render('formulario',{productos:totalProds})
})