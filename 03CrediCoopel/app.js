let cantidad=document.querySelector("#cantidad");
let vc=document.querySelector("#vcan")

cantidad.oninput=()=>{vc.innerHTML=cantidad.value;calcular();}

const calcular=()=>{
  var precioC=document.querySelector("#precioC")
    var producto=document.querySelector("#producto").value;
    var img=document.querySelector("#img");
    var precio=document.querySelector("#precio")
    var cantidad=document.querySelector("#cantidad")
    var precioCr=document.querySelector("#credito")
    var uno=document.querySelector("#m6");
    var dos=document.querySelector("#m12");
    var tres=document.querySelector("#m18");
var vc=document.querySelector("#vcan")
    var costo=0;
    var plazo=0;
    var aumento=0;
    var can=parseInt(cantidad.value)
    img.innerHTML=`<img src="img/${producto}.jpg" width="400">`;
    switch(producto){
        case "tv":costo=10000;break;
        case "comedor":costo=15000;break;
        case "lavadora":costo=18000;break;
        case "moto":costo=30000;break;
        case "sala":costo=21000;break;

    }
    
    if (uno.checked){
      plazo=6;
      aumento=0.1;
    }else if(dos.checked){
      plazo=12;
      aumento=0.15;
    }else {
      plazo=18;
      aumento=0.2;
    }
    
    var contado=costo*can;
    var cr=contado+aumento;
    var creditoo=cr/plazo;
    
precio.innerHTML=`<h3>Precio: $${costo.toFixed(2)} MXN</h3>`
precioC.innerHTML=`<h3>Precio Contado: $${contado.toFixed(2)} MXN</h3>`
precioCr.innerHTML=`<h3>Precio Crédito: $${creditoo.toFixed(2)} MXN</h3>`
}