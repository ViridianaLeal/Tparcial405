

let categorias=JSON.parse(localStorage.getItem("categorias"));

if (!categorias) { localStorage.setItem("categorias",JSON.stringify([]));} 
  


var add=document.querySelector("#agregar")

add.onclick=()=>{
  let nombre=document.querySelector("#nombre").value;

  if(nombre.trim()===''){
    Swal.fire({
      icon:'error', 
      title: 'ERROR', 
      text:'CAMPOS VACÍOS', 
      footer:'CECYTEM 2023'
    })
    return;
  }
  let categoria={nombre}
  categorias.push(categoria);
  localStorage.setItem("categorias",JSON.stringify(categorias))
  document.querySelector("#formAdd").reset();
  document.querySelector("#addModalCategoria").click()
  mostrarCategorias();
}
const mostrarCategorias=()=>{
  var categoriasHTML="" ;
  categorias=JSON.parse(localStorage.getItem("categorias"))
  let i=1;
  categorias.map(categoria=>{
    categoriasHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4" >
    <p><b>Categoría:</b>${categoria.nombre}</p>
    <button class="btn btn-primary" onclick="eliminarCategoria(${i})" >Eliminar</button>
    </div>`
    i++;
  })
  document.querySelector("#listaCategorias").innerHTML=categoriasHTML;
}
 
 const eliminarCategoria=(id)=>{
   Swal.fire({
     title:'Estas seguro de eliminar Categoría? ', 
     showDenyButton:true, 
     confirmButtonText:'SI', 
     denyButtonText:'NO' , 
   }).then((result)=>{
     if(result.isConfirmed){
       categorias=JSON.parse(localStorage.getItem ("categorias"))
       let categorias2=new Array();
       let i=1
       categorias.map(categoria=>{
         if(i!=id){
           categorias2.push(categoria)
         }
         i++;
       })
       localStorage.setItem("categorias",JSON.stringify(categorias2))
       mostrarCategorias();
     }else if(result.isDenied){
       return;
     }
   })
 }
 