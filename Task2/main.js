


$(document).ready(function () {

// Navbar hover dropdown
    $("#home_link").hover(function () {
        $("#dropdown_home").slideDown(300);
        }, function () {
            $("#dropdown_home").slideUp(200);
        }
    );
    $("#about_link").hover(function () {
        $("#dropdown_about").slideDown(300);
        }, function () {
            $("#dropdown_about").slideUp(200);
        }
    );
    $("#services_link").hover(function () {
        $("#dropdown_services").slideDown(300);
        }, function () {
            $("#dropdown_services").slideUp(200);
        }
    );
    $("#case_link").hover(function () {
        $("#dropdown_case").slideDown(300);
        }, function () {
            $("#dropdown_case").slideUp(200);
        }
    );
    $("#shop_link").hover(function () {
        $("#dropdown_shop").slideDown(300);
        }, function () {
            $("#dropdown_shop").slideUp(200);
        }
    );
    $("#blog_link").hover(function () {
        $("#dropdown_blog").slideDown(300);
        }, function () {
            $("#dropdown_blog").slideUp(200);
        }
    );
    
    // --------------------------

    // Tab nav
    $("#description").click(function (e) { 
        e.preventDefault();
        $("#description").toggleClass("nav_active");
    });
    $("#reviews").click(function (e) { 
        e.preventDefault();
        $("#reviews").toggleClass("nav_active");
    });

    // --------------








});




