$(document).ready(function(){
	// Page 1 to 2
	$('.down-arrow.pg-one').click(function(){
		$('.page1').css({
			'top':'-100vh'
		});
		$('.page2').css({
			'top':'0vh'
		});
		$('.nav-welcome').removeClass('nav-active');
		$('.nav-about').addClass('nav-active');
	});

	$('.up-arrow.pg-two').click(function(){
		$('.page1').css({
			'top':'0vh'
		});
		$('.page2').css({
			'top':'100vh'
		});
		$('.nav-welcome').addClass('nav-active');
		$('.nav-about').removeClass('nav-active');
	});

	// Page 2 to 3
	$('.down-arrow.pg-two').click(function(){
		$('.page2').css({
			'top':'-100vh'
		});
		$('.page3').css({
			'top':'0vh'
		});
		$('.nav-about').removeClass('nav-active');
		$('.nav-skills').addClass('nav-active');
	});

	$('.up-arrow.pg-three').click(function(){
		$('.page2').css({
			'top':'0vh'
		});
		$('.page3').css({
			'top':'100vh'
		});
		$('.nav-about').addClass('nav-active');
		$('.nav-skills').removeClass('nav-active');
	});

	//Page 3 to 4
	$('.down-arrow.pg-three').click(function(){
		$('.page3').css({
			'top':'-100vh'
		});
		$('.page4').css({
			'top':'0vh'
		});
		$('.nav-skills').removeClass('nav-active');
		$('.nav-portfolio').addClass('nav-active');
	});

	$('.up-arrow.pg-four').click(function(){
		$('.page3').css({
			'top':'0vh'
		});
		$('.page4').css({
			'top':'100vh'
		});
		$('.nav-skills').addClass('nav-active');
		$('.nav-portfolio').removeClass('nav-active');
	});

	//Page 4 to 5
	$('.down-arrow.pg-four').click(function(){
		$('.page4').css({
			'top':'-100vh'
		});
		$('.page5').css({
			'top':'0vh'
		});
		$('.nav-portfolio').removeClass('nav-active');
		$('.nav-contact').addClass('nav-active');
	});

	$('.up-arrow.pg-five').click(function(){
		$('.page4').css({
			'top':'0vh'
		});
		$('.page5').css({
			'top':'100vh'
		});
		$('.nav-portfolio').addClass('nav-active');
		$('.nav-contact').removeClass('nav-active');
	});
});