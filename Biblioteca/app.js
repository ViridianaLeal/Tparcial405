let editoriales=JSON.parse(localStorage.getItem("editoriales"));

if (!editoriales) { localStorage.setItem("editoriales",JSON.stringify([]));} 
  


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
  let editorial={nombre}
  editoriales.push(editorial);
  localStorage.setItem("editoriales",JSON.stringify(editoriales))
  document.querySelector("#formAdd").reset();
  document.querySelector("#addModalEditorial").click()
  mostrarEditoriales();
}
const mostrarEditoriales=()=>{
  var editorialesHTML="" ;
  editoriales=JSON.parse(localStorage.getItem("editoriales"))
  let i=1;
  editoriales.map(editorial=>{
    editorialesHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4" >
    <p><b>Categoría:</b>${editorial.nombre}</p>
    <button class="btn btn-primary" onclick="eliminarEditorial(${i})" >Eliminar</button>
    </div>`
    i++;
  })
  document.querySelector("#listaEditoriales").innerHTML=editorialesHTML;
}
 
 const eliminarEditorial=(id)=>{
   Swal.fire({
     title:'Estas seguro de eliminar Editorial? ', 
     showDenyButton:true, 
     confirmButtonText:'SI', 
     denyButtonText:'NO' , 
   }).then((result)=>{
     if(result.isConfirmed){
       editoriales=JSON.parse(localStorage.getItem ("editoriales"))
       let editoriales2=new Array();
       let i=1
       editoriales.map(editorial=>{
         if(i!=id){
           editoriales2.push(editorial)
         }
         i++;
       })
       localStorage.setItem("editoriales",JSON.stringify(editoriales2))
       mostrarEditoriales();
     }else if(result.isDenied){
       return;
     }
   })
 }
 