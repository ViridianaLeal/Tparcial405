let cal=document.querySelector("#cali");
let nivel=document.querySelector("#nivel");
let desempeno=document.querySelector("#desempeno");

cal.oninput=()=>{nivel.innerHTML=cal.value;calcular();} 
const calcular =()=>{
  let cali=parseInt(cal.value)
  if(cali>=9){
    desempeno.innerHTML="<h2>Excelente</h2>" ;
  }else if(cali==8){
    desempeno.innerHTML="<h2>Bueno</h2>" ;
  }else if(cali==7){
    desempeno.innerHTML="<h2>Bueno</h2>" ;
  }else if (cali==6){
    desempeno.innerHTML="<h2>Regular</h2>";
  }else{
    desempeno.innerHTML="<h2>NO SATISFECHO</h2>";
  }
  
}
