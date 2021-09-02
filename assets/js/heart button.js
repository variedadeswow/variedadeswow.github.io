$(document).ready(function(){
  $("#heart").click(function(){
    if($("#heart").hasClass("liked")){
      $("#heart").html('<a class="icon solid fa-heart" aria-hidden="true"></a>');
      $("#heart").removeClass("liked");
    }else{
      $("#heart").html('<a class="icon solid fa-heart" aria-hidden="true"></a>');
      $("#heart").addClass("liked");
          }
  });
});
