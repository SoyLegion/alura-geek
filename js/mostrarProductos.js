import { conexionAPI } from "./conexionApi.js";
const lista = document.querySelector("[data-lista]")

function crearCard(titulo,precio,url){
    const producto = document.createElement("div");
    producto.className="col fondo-dots";
    producto.innerHTML=`<header>
         <span class="like"><i class="fa-solid fa-heart"></i></span>
         <span class="cart"><i class="fa-solid fa-bag-shopping"></i></span>
         </header>
            <a href="#">
                <div class="contenido">
                               
                    <img src="${url}" alt="Imagen">
                    <h2>${titulo}</h2>
                    <h2>${precio}</h2>
                </div>
            </a>`;
        return producto;
}

async function listarProductos(){
    const listaApi = await conexionAPI.listarProductos()
    listaApi.forEach(producto=>lista.appendChild(crearCard(producto.titulo,producto.precio,producto.imagen)))
}

listarProductos()