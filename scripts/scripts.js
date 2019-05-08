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