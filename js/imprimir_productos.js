export const imprimir=(container,template,data=[])=>{

let fragment=document.createDocumentFragment();

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