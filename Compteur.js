

function update() {
   document.getElementById("text").value = cookiecount;
   document.title = cookiecount + " Cookies";

   document.getElementById("amountMultiplier").innerHTML = "Multiplier Upgrade x" + (multiplier + 1);
   document.getElementById("amountMultiplier2").innerHTML = "x" + (multiplier + 1);
   document.getElementById("costMultiplier").innerHTML = ((multiplier + 1) * 10) + "Cookies";
   document.getElementById("currentMultiplier").innerHTML = "Your Current Multiplier is x" + (multiplier);


   document.getElementById("amountAutoClick").innerHTML="You Own" +autoClick+ "Auto Clickers";
   document.getElementById("costAutoClick").innerHTML = ((autoClick + 1) * 12) + " Cookies";

   document.getElementById("amountFactories").innerHTML="You Own"+ factories +"Factories";
   document.getElementById("costFactories").innerHTML = ((factories + 1) * 15) + "Cookies";

   document.getElementById("cookiespersecond").innerHTML = "You are gaining" + (((autoClick) + (factories * 2)) * multiplier) + "Cookies per/s";
}

var multiplier = 1;

var cookiecount = 0;
var autoClick = 0;
var factories = 0;

function timer() {
   cookiecount = cookiecount + autoClick * multiplier;
   cookiecount = cookiecount + factories * 2 * multiplier;
   update()
}
setInterval(timer, 1000)

function add() { 
   cookiecount = cookiecount + 1;
   update()
}

function save() {
   localStorage.setItem("cookiecount", cookiecount);
   localStorage.setItem("autoClick", autoClick);
   localStorage.setItem("factories", factories);
   localStorage.setItem("multiplier", multiplier);

}



function load() {
   cookiecount = localStorage.getItem("cookiecount");
   cookiecount = parseInt(cookiecount);
   autoClick = localStorage.getItem("autoClick");
   autoClick = parseInt(autoClick);
   factories = localStorage.getItem("factories");
   factories = parseInt(factories);
   multiplier = localStorage.getItem("multiplier");
   multiplier = parseInt(multiplier);
   update()
}

function buyAutoClick() {
   if(cookiecount >= ((autoClick+1) * 12)) {
      cookiecount = cookiecount - ((autoClick + 1) * 12);
      autoClick = autoClick + 1;
      update()
   }
}

function buyFactory() {
   if(cookiecount >= ((factories + 1) * 15)) {
      cookiecount = cookiecount - ((factories + 1) * 15);
      factories = factories +  1;
      update()
   }
}
function buyMultiplier() {
  if (cookiecount >= ((multiplier+1) * 10)) {
      cookiecount = cookiecount - ((multiplier + 1) * 10);
      multiplier = multiplier + 1;
      update()

  }
};
    