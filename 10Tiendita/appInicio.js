

let productos=JSON.parse(localStorage.getItem("productos"));
if(!productos){  localStorage.setItem("productos",JSON.stringify([]));}

const mostrarProductos=(categoria)=>{
    var productosHTML="";
    productos=JSON.parse(localStorage.getItem("productos"))
    let i=1;
    if(categoria=="0"){
        productos.map(producto=>{       
            if(i%2==1){productosHTML+=`<div class="row W-50">`}
            productosHTML+=`<div class="col">
                            <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                <img src="img.jpg" width="100%">
                                <p><b>${producto.nombre.toUpperCase()}</b></p>
                                <p><b>$${producto.precio}</b></p>
                                <button class="btn btn-primary" onclick="comprarProducto(${i})">Comprar</button>
                            </div>
                            </div>`
            if(i%2==0){productosHTML+=`</div>`}
            i++;
        })
        }else{
            productos.map(producto=>{                
                if(categoria==producto.categoria){
                    if(i%2==1){productosHTML+=`<div class="row W-50">`}
                productosHTML+=`<div class="col">
                                <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                    <img src="img.jpg" width="100%">
                                    <p><b>${producto.nombre.toUpperCase()}</b></p>
                                    <p><b>$${producto.precio}</b></p>
                                    <button class="btn btn-primary" onclick="comprarProducto(${i})">Comprar</button>
                                </div>
                                </div>`                          
                    if(i%2==0){productosHTML+=`</div>`}
                    i++;
                }                
            })
        }
    document.querySelector("#listProductos").innerHTML=productosHTML;
}
const mostrarCategorias=()=>{
    var categoriasHTML="";
    categorias=JSON.parse(localStorage.getItem("categorias"))
    categoriasHTML+=`<option value="0">TODAS</option>`; 
    categorias.map(categoria=>{
        categoriasHTML+=`<option value="${categoria.nombre}">${categoria.nombre}</option>`;        
    })
    document.querySelector("#categoria").innerHTML=categoriasHTML;
}