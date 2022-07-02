
// Formating option clicks to reflet in the rating
$(".rate").click(function(){
    let rate = $(this).attr("id");
    $(".rating").html(rate);
    $(".rate").removeClass("active");
    $("#"+rate).addClass("active");
});


// Formating button click to flip pages 
$("button").click(function(){
    $("main").addClass("active");
    $("aside").addClass("active");
});