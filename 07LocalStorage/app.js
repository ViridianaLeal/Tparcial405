const save=()=>{
  let key=document.querySelector("#key").value;
  let v=document.querySelector("#value").value;
  localStorage.setItem(key,v);
}

const limpiar=()=>{
  localStorage.clear();
}