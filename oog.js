var main = function () {
  "use strict";
  $("button").on('click', function(){
  	if ($(".werk1").hasClass("zichtbaar")){
  		$(".werk1").fadeOut(2000,
        function(){ 
          $(".werk1").removeClass("zichtbaar")
          $(".werk2").fadeIn(2000)
          $(".werk2").addClass("zichtbaar") 
        });
    }
  	else if ($(".werk2").hasClass("zichtbaar")){
  		$(".werk2").fadeOut(2000,
        function(){ 
          $(".werk2").removeClass("zichtbaar")
          $(".werk3").fadeIn(2000)
          $(".werk3").addClass("zichtbaar") 
        });
    }
    else if ($(".werk3").hasClass("zichtbaar")){
  		$(".werk3").fadeOut(2000,
        function(){ 
          $(".werk3").removeClass("zichtbaar")
          $(".werk4").fadeIn(2000)
          $(".werk4").addClass("zichtbaar") 
        });
    }
  	else {
  		$(".werk4").fadeOut(2000,
        function(){ 
          $(".werk4").removeClass("zichtbaar")
          $(".werk1").fadeIn(2000)
          $(".werk1").addClass("zichtbaar")
        });
    }
  	
  	
  });


};

$("document").ready(main);