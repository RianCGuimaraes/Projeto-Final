function convert(){

 var renda = document.getElementById("renda");
  var rendaM = renda.value;
//
 var luz = document.getElementById("luz");
  var luzV = luz.value; 

  var luzR = 0
  var luzP = 0

  luzR = luzV*100;
  luzP = luzR/rendaM;
//
  var agua = document.getElementById("agua");
  var aguaV = agua.value; 

  var aguaR = 0
  var aguaP = 0

  aguaR = aguaV*100;
  aguaP = aguaR/rendaM;
//
  var aluguel = document.getElementById("aluguel");
  var aluguelV = aluguel.value; 

  var aluguelR = 0
  var aluguelP = 0

  aluguelR = aluguelV*100;
  aluguelP = aluguelR/rendaM;
//
  var internet = document.getElementById("internet");
  var internetV = internet.value; 

  var internetR = 0
  var internetP = 0

  internetR = internetV*100;
  internetP = internetR/rendaM;
//
  var alimento = document.getElementById("alimento");
  var alimentoV = alimento.value; 

  var alimentoR = 0
  var alimentoP = 0

  alimentoR = alimentoV*100;
  alimentoP = alimentoR/rendaM;
//
  var diversos = document.getElementById("diversos");
  var diversosV = diversos.value; 

  var diversosR = 0
  var diversosP = 0

  diversosR = diversosV*100;
  diversosP = diversosR/rendaM;
//
  var outRes = document.getElementById("luzP");
  outRes.innerHTML = luzP;
//
  var outRes = document.getElementById("aguaP");
  outRes.innerHTML = aguaP;
//
  var outRes = document.getElementById("aluguelP");
  outRes.innerHTML = aluguelP;  
//
  var outRes = document.getElementById("internetP");
  outRes.innerHTML = internetP;
//
  var outRes = document.getElementById("alimentoP");
  outRes.innerHTML = alimentoP;
//
  var outRes = document.getElementById("diversosP");
  outRes.innerHTML = diversosP;

}