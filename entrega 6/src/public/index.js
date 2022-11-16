const socket = io() ;

function renderProducto(producto){
    const linea = document.createElement('tr');

    const titulo = document.createElement('td');
    titulo.innerHTML = producto.title;
    linea.appendChild(titulo);

    const precio = document.createElement('td')
    precio.innerHTML = producto.price;
    linea.appendChild(precio);

    const foto = document.createElement('td')
    const img = document.createElement('img')
    img.setAttribute('src',producto.thumbnail);
    img.setAttribute('width', '25')
    foto.appendChild(img)
    linea.appendChild(foto)

    document.getElementById('productos').appendChild(linea)   
}
socket.on('nueva-conexion', data=>{
    data.forEach(producto => {
        renderProducto(producto);
    });
})

socket.on('producto', data =>{
    renderProducto(data)
})

function addProduct(event){
    const producto ={
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        thumbnail: document.getElementById('thumbnail').value,
    };
    socket.emit('new-prodcut',producto)
    return false
}
