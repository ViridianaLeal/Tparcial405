let i=document.querySelector("#i");
let e=document.querySelector("#e");
let c=document.querySelector("#c");
let f=document.querySelector("#f");
let m=document.querySelector("#m");
let vi=document.querySelector("#vi");
let ve=document.querySelector("#ve");
let vc=document.querySelector("#vc");
let vf=document.querySelector("#vf");
let vm=document.querySelector("#vm");
let res=document.querySelector("#res");

i.oninput=()=>{vi.innerHTML=i.value;calcular();}
e.oninput=()=>{ve.innerHTML=e.value;calcular();}
c.oninput=()=>{vc.innerHTML=c.value;calcular();}
f.oninput=()=>{vf.innerHTML=f.value;calcular();}
m.oninput=()=>{vm.innerHTML=m.value;calcular();}

const calcular=()=>{
  let vvi=parseFloat(i.value)
  let vve=parseFloat(e.value)
  let vvc=parseFloat(c.value)
  let vvf=parseFloat(f.value)
  let vvm=parseFloat(m.value)
  
  
  
  let calculaP=(vvi+vve+vvc+vvf+vvm)/5;
  res.innerHTML=calculaP.toFixed(1)
  
  if(calculaP>=5 && calculaP<6){
    res.style.background="red"
  }else if(calculaP>=6 && calculaP<=8){
    res.style.background="orange"
  }else if(calculaP >=9 ){
    res.style.background="green"
  }
  
  
}