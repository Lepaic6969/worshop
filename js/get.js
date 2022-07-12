export const getProducts=async()=>{
    let data=[];
    try{
        const res=await fetch("http://localhost:3000/products");
        data=await res.json();
    }catch(err){
        alert("Error al obtener los productos");
    }

    return data;
    
}