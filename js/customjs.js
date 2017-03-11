/**********************************
FADE IN ON LOAD
***********************************/

$(function() {
    $("#wrapper").fadeIn(1000);
});


/**********************************
Footer- Social links hover effect
***********************************/

$(function() {
    $('footer .fa').mouseenter(function() {
        $(this).effect('bounce',1000);
    })
});
