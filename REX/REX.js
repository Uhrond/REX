/* Constante */
var Initial = "K";
var topInitial = 0;
var leftInitial = 0;

$(document).ready(function () {
    $("body").append("<div class='REXIcon'>" + Initial + "</div>");
    $(".REXIcon").css({ 'top': topInitial, 'left': leftInitial });
    $(".REXIcon").draggable();
});
$(document).on('click', '.REXIcon', function (e) {
    $("body").append("<div class='REXView'></div>");
    $(".REXView").hide().load("REX/REX.aspx").fadeIn();
    e.preventDefault();
});
