/* Calculate OHMs */

function calculateOhm() {
  var voltage = document.getElementById("voltageV");
  var resistance = document.getElementById("resistanceR");
  var current = document.getElementById("currentC");
  
  if(voltage.value > 0 && resistance.value > 0 && current.value == 0){alertbox.innerHTML = voltage.value / resistance.value + " (I)";}
  if(voltage.value > 0 && current.value > 0 && resistance.value == 0){alertbox.innerHTML = voltage.value / current.value + " (Ω)";}
  if(current.value > 0 && resistance.value > 0 && voltage.value == 0){alertbox.innerHTML = current.value * resistance.value  + " (V)";}
  else if(voltage.value > 0 && resistance.value > 0 && current.value > 0){alertbox.innerHTML = "Invalid values, please try again";}
  
}

/* Calculate Watts */

function calculateWatts() {
  var voltagew = document.getElementById("voltageVw");
  var resistancew = document.getElementById("resistanceRw");
  var currentw = document.getElementById("currentCw");


  if(currentw.value > 0 && resistancew.value > 0 && voltagew.value == 0){alertboxw.innerHTML = Math.pow(currentw.value, 2) * resistancew.value + " (P)";}
  if(voltagew.value > 0 && currentw.value > 0 && resistancew.value == 0){alertboxw.innerHTML = voltagew.value * currentw.value + " (P)";}
  if(voltagew.value > 0 && resistancew.value > 0 && currentw.value == 0){alertboxw.innerHTML = Math.pow(voltagew.value, 2) / resistancew.value + " (P)";}
  else if(voltagew.value > 0 && resistancew.value > 0 && currentw.value > 0){alertboxw.innerHTML = "Invalid values, please try again";}
  
}