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




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
