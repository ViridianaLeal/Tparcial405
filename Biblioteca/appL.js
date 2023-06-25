let libros=JSON.parse(localStorage.getItem("libros"));

if (!libros) { localStorage.setItem("libros",JSON.stringify([]));} 
  


var add=document.querySelector("#agregar")

add.onclick=()=>{
  let nombre=document.querySelector("#nombre").value;
  let precio=document.querySelector("#precio").value;
  let autor=document.querySelector("#autor").value;
  let editorial=document.querySelector("#editorial").value;
  if(nombre.trim()===''||precio.trim()===''||autor.trim()===''||editorial.trim()===''){
    Swal.fire({
      icon:'error', 
      title: 'ERROR', 
      text:'CAMPOS VACÍOS', 
      footer:'CECYTEM 2023'
    })
    return;
  }
  let libro={nombre,precio,autor,editorial}
  libros.push(libro);
  localStorage.setItem("libros",JSON.stringify(libros))
  document.querySelector("#formAdd").reset();
  document.querySelector("#addModalLibro").click()
  mostrarLibros();
}
const mostrarLibros=()=>{
  var librosHTML="" ;
  libros=JSON.parse(localStorage.getItem("libros"))
  let i=1;
  libros.map(libro=>{
    librosHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4" >
    <p><b>Nombre del libro:</b>${libro.nombre}</p>
    <p><b>Precio:</b>${libro.precio}</p>
    <p><b>Autor:</b>${libro.autor}</p>
    <p><b>Categoría:</b>${libro.editorial}</p>
    <button class="btn btn-danger" onclick="eliminarLibro(${i})" >Eliminar</button>
    </div>`
    i++;
  })
  document.querySelector("#listaLibros").innerHTML=librosHTML;
  mostrarEditoriales();
}
const mostrarEditoriales = () => {
  var editorialesHTML = "";
  editoriales = JSON.parse(localStorage.getItem("editoriales"))
  let i = 1;
  editoriales.map(editorial => {
    editorialesHTML += `<option value="${editorial.nombre}">${editorial.nombre} </option>`
  })
  document.querySelector("#editorial").innerHTML = editorialesHTML;
}
 const eliminarLibro=(id)=>{
Swal.fire({
  title: `Estas seguro de eliminar este libro?`,
  showDenyButton: true,
  confirmButtonText: `SI`,
  denyButtonText: `NO`,
}).then((result)=>{
  if(result.isConfirmed){
    libros=JSON.parse(localStorage.getItem("libros"))
    let libros2=new Array();
    let i=1
    libros.map(libro=>{
      if(i!=id){
        libros2.push(libro)
      }
    i++;
})
localStorage.setItem("libros",JSON.stringify(libros2))
mostrarLibros();
}else if(result.isDenied){
  return;
}
})
}

 
