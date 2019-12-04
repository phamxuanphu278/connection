function getRandomArbitrary(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){

	$(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(2200).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

	setInterval(function(){
		var screenHeight = $(document).height();
		var screenWidth = $(document).width();
		var startLeft = getRandomArbitrary(0, screenWidth);
		var timeRun = getRandomArbitrary(4000, 6000);
		var opacityR = Math.random() * (1 - 0.2) + 0.2;
		var sizeR = getRandomArbitrary(15, 40);
		var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
		var snow = document.createElement('span');

		$(snow).addClass('snow-item fa fa-heart').css({
			'position'  : 'absolute',
			'z-index'   : 'auto',
			'color'     : '#ff0000',
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
