$(document).ready(function(){

	$('.nav-item').click(function(){
		var currentNavbarId = $('.nav-active').attr('id');
		// console.log("currentNavbarId: " + currentNavbarId);

		var targetedPageId = event.target.id;
		// console.log("targetedPageId: " + targetedPageId);

		$('.pages').css({
			'top':`-${targetedPageId - 1}00vh`
		});

 		$(`#${currentNavbarId}`).removeClass('nav-active');
		$(`#${targetedPageId}`).addClass('nav-active');
	});


	// Page 1 to 2
	$('.down-arrow.pg-one').click(function(){
		$('.pages').css({
			'top':'-100vh'
		});
		$('.nav-welcome').removeClass('nav-active');
		$('.nav-about').addClass('nav-active');
	});

	$('.up-arrow.pg-two').click(function(){
		$('.pages').css({
			'top':'0vh'
		});
		$('.nav-welcome').addClass('nav-active');
		$('.nav-about').removeClass('nav-active');
	});

	// Page 2 to 3
	$('.down-arrow.pg-two').click(function(){
		$('.pages').css({
			'top':'-200vh'
		});
		$('.nav-about').removeClass('nav-active');
		$('.nav-portfolio').addClass('nav-active');
	});

	$('.up-arrow.pg-three').click(function(){
		$('.pages').css({
			'top':'-100vh'
		});
		$('.nav-about').addClass('nav-active');
		$('.nav-portfolio').removeClass('nav-active');
	});

	//Page 3 to 4
	$('.down-arrow.pg-three').click(function(){
		$('.pages').css({
			'top':'-300vh'
		});
		$('.nav-portfolio').removeClass('nav-active');
		$('.nav-contact').addClass('nav-active');
	});

	$('.up-arrow.pg-four').click(function(){
		$('.pages').css({
			'top':'-200vh'
		});
		$('.nav-portfolio').addClass('nav-active');
		$('.nav-contact').removeClass('nav-active');
	});

	// Stops the carousel auto scroll right
	$('.carousel').carousel({
		interval: false
	});
});