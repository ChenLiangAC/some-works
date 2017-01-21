function nextQuestion(number, offer){
	$('.fade').fadeIn(function(){
		$('#question'+(number-1)).hide();
		$('#question'+number).show();
		$('.fade').fadeOut(function(){
				if(offer != undefined){
					$('.loader .text1').fadeIn();
					setTimeout(function(){
						$('.loader .text1').fadeOut(function(){$('.loader .text2').fadeIn()});
						setTimeout(function(){
							$('.loader .text2').fadeOut(function(){$('.loader .text3').fadeIn()});
							setTimeout(function(){
								internal = 1;
								window.location = offer;
							}, 1200);
						}, 1200);
						
					}, 1200);
				}
			}
		);
	})
	
}