import { conexionAPI } from "./conexionApi.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(){

  evento.preventDefault();
  const titulo= document.querySelector("[data-titulo]").value;  
  const precio= document.querySelector("[data-precio]").value;
  const imagen= document.querySelector("[data-url]").value;

   await conexionAPI.crearProducto(titulo,precio,imagen); 

   Window.location.href="../pages/productoEnviado.html";
}


formulario.addEventListener("submit", evento => crearProducto(evento));