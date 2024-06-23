async function listarProductos(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    //console.log (conexionConvertida);
    return conexionConvertida
}

async function crearProducto(titulo,precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio:precio,
            imagen:url
        })
    })
    const conexionConvertida= conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listarProductos,crearProducto
}
//listarProductos();