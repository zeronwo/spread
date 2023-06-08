$('').mousemove(function (e) {



	$('.service_item li').each(function () {
		var speed = $(this).attr('data-speed');
		if ($(this).attr('data-revert')) speed *= -1;
		TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });

	});

});