$(document).ready(function() {
	
	var windowHeight = window.innerWidth;
	$('.home').css('width',windowHeight);
	
	$( window ).scroll(function() {
		var windowHeight = window.innerHeight;
		
		if(windowHeight > 668){	
			nScrollPosition = $( window ).scrollTop();
			if(nScrollPosition>=150){
				$( ".fixo" ).removeClass('hide');
			}else{
				$( ".fixo" ).addClass('hide');
			}
		}
	});
	
	$('.remove').click(function(){
		$(".menu-total").addClass('hide');
	});
	
	$('.add').click(function(){
		$(".menu-total").removeClass('hide');
	});
	
	$("#next").click(function(){
		if(!$(".banner2").is(':visible')){
			$('.banner2').fadeIn(500);
			$(".banner1").fadeOut();
		}
	});
	
	$("#prev").click(function(){
		if(!$(".banner1").is(':visible')){
			$('.banner1').fadeIn(500);
			$(".banner2").fadeOut();
		}
	});
	
	
	
});
