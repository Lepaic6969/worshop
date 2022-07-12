import { getProducts } from "./get.js";
import {imprimir} from "./imprimir_productos.js"


document.addEventListener("DOMContentLoaded",async(e)=>{
    const data=await getProducts();
    const container=document.querySelector(".container-products");
    const template=document.getElementById("template").content;

    imprimir(container,template,data);

});