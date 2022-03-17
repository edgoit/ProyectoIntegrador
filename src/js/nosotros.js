$(document).ready(function(){
    $('.dropdown-toggle').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

