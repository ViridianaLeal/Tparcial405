

const save = () => {
  let marca=document.querySelector("#marca").value;
  let modelo=document.querySelector("#modelo").value;
  let ano=document.querySelector("#ano").value;
  let color=document.querySelector("#color").value;
  let auto={marca,modelo,ano,color}
  
  localStorage.setItem("auto",JSON.stringify(auto));
}

const limpiar = () => {
  localStorage.clear();
}