
// Formating option clicks to reflet in the rating
$(".rate").click(function(){
    let rate = $(this).attr("id");
    $(".rating").html(rate);
    $(".rate").removeClass("active");
    $("#"+rate).addClass("active");
});


// Formating button click to flip pages 
$("button").click(function(){
   let x = $(".rating").html();
    if(x = ""){
      return ;
    }else{
      $("main").addClass("active");
      $("aside").addClass("active");
  }
});
