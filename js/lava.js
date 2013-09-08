$(document).ready(function(){
	console.log("here");

	var style = 'easeOutCubic';
	var default_left = Math.round($('#lava li.selected').offset().left - $('#lava').offset().left);
	var default_width = $('#lava li.selected').width();

	$('#box').css({left: default_left});
	$('#box .head').css({width: default_width});

	$('#lava li').hover(function(){

		left = Math.round($(this).offset().left - $('#lava').offset().left);
		width = $(this).width();

		$('#box').stop(false, true).animate({left: left}, {duration:1000, easing: style});
		$('#box .head').stop(false, true).animate({width:width}, {duration: 1000, easing: style});

	})
});