export const imprimir=(container,template,data=[])=>{

let fragment=document.createDocumentFragment();



// <template id="template">
//     <div class="col-4">
//         <img class="w-75 img-fluid" src="" alt="botella de jugo">
//         <h5>Nombre del Jugo</h5>
//         <p id="caracteristicas">Características del jugo</p>
//         <p id="precio" class="fw-bold">$999</p>
//     </div>
// </template>
console.log(data);
    data.forEach(el=>{
        template.querySelector("img").setAttribute("src",el.img);
        template.querySelector("h5").textContent=el.title;
        template.getElementById("caracteristicas").textContent=el.description;
        template.getElementById("precio").textContent=el.precio;

        let $clone=template.cloneNode(true);
        fragment.appendChild($clone);

    });
    container.appendChild(fragment);
}