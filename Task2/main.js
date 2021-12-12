


// Navbar hover dropdown
$(document).ready(function () {
    $("#home_link").hover(function () {
        $("#dropdown_home").slideToggle(400);
    });
    $("#about_link").hover(function () {
        $("#dropdown_about").slideDown(400,function(){
            $("#dropdown_about").hover(function () {
                $(this).slideDown();
            });
        });
    },function(){
        $("#dropdown_about").slideUp(300,function(){
            $("#dropdown_about").hover(function () {
                $(this).slideUp();
            });
        });
    });
});