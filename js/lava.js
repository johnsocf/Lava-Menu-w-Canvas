$(document).ready(function(){
	console.log("here");

	var style = 'easeOutCubic',
	default_left = Math.round($('#lava li.selected').offset().left - $('#lava').offset().left),
	default_width = $('#lava li.selected').width();
	console.log("original dfw :" + default_width);

	$('#box').css({left: default_left});
	$('#box .head').css({width: default_width});

	$('#lava li').hover(function(){

		left = Math.round($(this).offset().left - $('#lava').offset().left);
		width = $(this).width();

		$('#box').stop(false, true).animate({left: left}, {duration:1000, easing: style});
		$('#box .head').stop(false, true).animate({width:width}, {duration: 1000, easing: style});

	}).click(function(){
		$('#lava li').removeClass('selected');
		$(this).addClass('selected');
	});


		$('#lava').mouseleave(function () {
			var selected_left = Math.round($('#lava li.selected').offset().left - $('#lava').offset().left);
			var selected_width = $('#lava li.selected').width();

			$('#box').stop(false, true).animate({left: selected_left}, {duration: 1500, easing: style});
			console.log("width :" + default_width);
			$('#box .head').stop(false, true).animate({width:selected_width}, {duration:1500, easing: style});
			console.log("width2 :" + default_width);
		});
});