function getRandomArbitrary(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

function get_random_color() 
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}


$(document).ready(function(){

	$(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(1).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}
	
	setInterval(function(){
		var screenHeight = $(document).height();
		var screenWidth = $(document).width();
		var startLeft = getRandomArbitrary(0, screenWidth);
		var timeRun = getRandomArbitrary(4000, 6000);
		var opacityR = Math.random() * (1 - 0.2) + 0.2;
		var sizeR = getRandomArbitrary(30, 40);
		var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
		var snow = document.createElement('span');
		var colorS = get_random_color();

		$(snow).addClass('snow-item fa fa-gift').css({
			'position'  : 'absolute',
			'z-index'   : 'auto',
			'color'     : colorS,
			'display'   : 'block',
			'top'       : 0,
			'left'      : startLeft,
			'opacity'   : opacityR,
			'font-size' : sizeR+'px'
		})
		.appendTo('body')
		.animate({
			'top'       : screenHeight-sizeR,
			'left'      : endLeft
		},{
			duration : timeRun,
			easing : 'linear',
			complete:function(){
				$(this).fadeOut('fast',function(){
					$(this).remove();
				});
			}
		});
	},500);
});
