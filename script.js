function closemenu() {
    document.getElementByClassName("home-label").style.display = "none";
}

function closeMenu() {
    document.getElementById("span").style.display = "none";
    document.getElementById("menu").style.width = "50px";    
    document.getElementById("pages").style.display = "none";
    document.getElementById("icons").style.marginLeft = "-10%";
    document.getElementById("span2").style.display = "block";
    document.getElementById("overlay-sidebar").style.display = "none";
    var homeLabels = document.getElementsByClassName("home-label");
    for (var i = 0; i < homeLabels.length; i++) {
        homeLabels[i].style.marginLeft = "5px";
    }
  }

function openMenu() {
    document.getElementById("span2").style.display = "none";
    document.getElementById("span").style.display = "block";
    document.getElementById("menu").style.width = "400px"; 
    document.getElementById("pages").style.display = "block";
    document.getElementById("icons").style.marginLeft = "-150%";
    document.getElementById("overlay-sidebar").style.display = "block";
}

var homeLabels = document.getElementsByClassName("home-label");
for (var i = 0; i < homeLabels.length; i++) {
    homeLabels[i].style.marginLeft = "500px";
}

