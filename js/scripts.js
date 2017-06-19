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
