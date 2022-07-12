export class Producto{
    static contador=6;
    constructor(img,title,description,precio){
        this.id=++Producto.contador;
        this.img=img;
        this.title=title;
        this.description=description;
        this.precio=precio;
    }
}