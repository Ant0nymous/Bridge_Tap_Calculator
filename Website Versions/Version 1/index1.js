// Calculate Script

function Calculate() {
 let deltD = document.getElementById("deltDistance").value;
 let bridgeT = document.getElementById("bridgeTap").value;
 let newDeltD = deltD - 50
 let internal = newDeltD > bridgeT
 if (internal === true) {
   tech = "Telstra Technician with FFS, Electrician or ACMA Cabler Required to Remove Bridge Tap"
 }
 else if (internal === false) {
   tech = "NBN Technician Required to Remove Bridge Tap"
 }
 alert(tech);}
