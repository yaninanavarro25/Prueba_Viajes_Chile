// smoothscroll

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
   
    window.location.hash = hash;
    });
    }
    });
   

// Alert de boton enviar

$("#botonenviar").click(function () {
    alert("Te contactaremos a la brevedad");
});

});
