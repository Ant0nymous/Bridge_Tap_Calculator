 // Calculate Script

function Calculate() {
  let deltD = document.getElementById("deltDistance").value;
  let bridgeT = document.getElementById("bridgeTap").value;
  let newDeltD = deltD - 50
  let internal = newDeltD > bridgeT
  if (internal === true) {
    tech = "Copy into your notes\n\nEstimated DELT Distance - 50m = " + newDeltD + "m\nBridge Tap Distance = " + bridgeT + "m\nDELT Distance > Bridge Tap Distance \nInternal Bridge Tap!\nPaid Telstra Technician, Electrician or \nACMA Cabler Required to Remove Bridge Tap"
  }
  else if (internal === false) {
    tech = "Copy into your notes\n\nEstimated DELT Distance - 50m = " + newDeltD + "m\nBridge Tap Distance = " + bridgeT + "m\nDELT Distance < Bridge Tap Distance \nExternal Bridge Tap! \nNBN Technician Required to Remove Bridge Tap"
  }
  alert(tech);}
