var main = function () {
  "use strict";
  
  setInterval(function () {
      if ($(".me1").hasClass("verschijn")){
      $(".me1").fadeOut(1000,
        function(){ 
          $(".me1").removeClass("verschijn")
          $(".me2").fadeIn(1000)
          $(".me2").addClass("verschijn") 
        });
      }
      else if ($(".me2").hasClass("verschijn")){
        $(".me2").fadeOut(1000,
          function(){ 
            $(".me2").removeClass("verschijn")
            $(".me3").fadeIn(1000)
            $(".me3").addClass("verschijn") 
          });
      }
       else if ($(".me3").hasClass("verschijn")){
        $(".me3").fadeOut(1000,
          function(){ 
            $(".me3").removeClass("verschijn")
            $(".me4").fadeIn(1000)
            $(".me4").addClass("verschijn") 
          });
      }
      else {
        $(".me4").fadeOut(1000,
          function(){ 
            $(".me4").removeClass("verschijn")
            $(".me1").fadeIn(1000)
            $(".me1").addClass("verschijn")
          });
      }    
  }, 6000)
 
}

$("document").ready(main);