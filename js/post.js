export const agregarProducto=async(object)=>{
    try{
        let options={
            method:"POST",
            headers:{
                "Content-type":"aplication/json;charset=utf-8"
            },
            body:JSON.stringify(object)
        }

        // console.log(object,options)
        await fetch("http://localhost:3000/products",options);
        
    }catch(err){
        alert(err);
    }
}

