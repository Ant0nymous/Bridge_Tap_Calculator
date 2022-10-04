 // Calculate Script

function Calculate() {
  let deltD = document.getElementById("deltDistance").value;
  let bridgeT = document.getElementById("bridgeTap").value;
  let newDeltD = deltD - 50
  let internal = bridgeT < newDeltD
  if (internal === false) {
    tech = "Copy into your notes<br><br>Estimated DELT Distance " + deltD + "m - 50m = " + newDeltD + "m<br>Bridge Tap Distance = " + bridgeT + "m<br>Bridge Tap Distance is greater than Est DELT Distance<br>Internal Bridge Tap!<br>Paid Telstra Technician, Electrician or <br>ACMA Cabler Required to Remove Bridge Tap"
  }
  else if (internal === true) {
    tech = "Copy into your notes<br><br>Estimated DELT Distance " + deltD + "m - 50m = " + newDeltD + "m<br>Bridge Tap Distance = " + bridgeT + "m<br>Bridge Tap Distance is less than Est DELT Distance<br>External Bridge Tap!<br>NBN Technician Required to Remove Bridge Tap"
  }
  document.getElementById("tech").innerHTML = tech.toString();
  }
