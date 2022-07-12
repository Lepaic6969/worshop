import {Producto} from "../js/Producto.js"
import { agregarProducto } from "./post.js";

// const producto=new Producto("https...","imagen prueba","muy buena",3000);
// console.log(producto);

const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();
  /*  <input id="enlace" class="w-50" type="text" placeholder="Enlace"> <br>
    <input id="nombre" class="w-50"  type="text" placeholder="nombre"><br>
    <input id="descripcion" class="w-50"  type="text" placeholder="descripcion"><br>
    <input id="precio" class="w-50"  type="text" placeholder="precio"><br> */

    let enlace=document.getElementById("enlace").value;
    let nombre=document.getElementById("nombre").value;
    let descripcion=document.getElementById("descripcion").value;
    let precio=Number(document.getElementById("precio").value);

    let producto=new Producto(enlace,nombre,descripcion,precio);

    console.log(JSON.stringify(producto));
    agregarProducto(producto);

});