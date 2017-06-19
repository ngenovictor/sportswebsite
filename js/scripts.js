
//====Events & weather update



//====END Events & weather update

//USER LOGIC
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}




$(document).ready(function(){

});
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    $("div#main").css("opacity","0.5");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("div#main").css("opacity","1");
}
