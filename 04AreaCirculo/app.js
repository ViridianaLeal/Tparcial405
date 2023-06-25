let radio=document.querySelector("#radio");
let vradio=document.querySelector("#vradio");
let res=document.querySelector("#res");

radio.oninput=()=>{vradio.innerHTML=radio.value;calcular();} 
const calcular =()=>{
  let r=parseFloat(radio.value);
  let formula=3.1416*r*r;
  res.innerHTML=formula.toFixed(2);
  
}
