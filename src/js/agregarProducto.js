const form = document.getElementById("formulario");


arrayProductos = [];


form.addEventListener("submit",e =>{
    e.preventDefault();

    let marca = document.getElementById("marca");
    let categoria = document.getElementById("categoria");
    let nombre = document.getElementById("nombre");    
    let descripcion = document.getElementById("descripcion");
    let talla = document.getElementById("talla");
    let cantidad = document.getElementById("cantidad");
    let precio = document.getElementById("precio");
    
    console.log(marca.value);
    console.log(descripcion.value);

    let nuevoProducto = 
    {
        "id" : arrayProductos.length + 1,
        "nombre" :  nombre.value,
        "marca" : marca.value,
        "categoria" : categoria.value,
        "descripcion" : descripcion.value,
        "talla" : talla.value,
        "cantidad" : cantidad.value,
        "precio" : parseInt(precio.value)
    }
    arrayProductos.push(nuevoProducto);

    let jsonProducto = JSON.stringify(arrayProductos);
    console.log(typeof jsonProducto);
    localStorage.setItem("productsData", jsonProducto);
});
