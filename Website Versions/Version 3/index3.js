 // Calculate Script

function Calculate() {
  let deltD = document.getElementById("deltDistance").value;
  let bridgeT = document.getElementById("bridgeTap").value;
  let newDeltD = deltD - 50
  let internal = newDeltD > bridgeT
  if (internal === true) {
    tech = "Internal Bridge Tap!\nPaid Telstra Technician, Electrician or \nACMA Cabler Required to Remove Bridge Tap"
  }
  else if (internal === false) {
    tech = "External Bridge Tap!\nNBN Technician Required to Remove Bridge Tap"
  }
  alert(tech);}
