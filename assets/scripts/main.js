(function() {
	'use strict';

	function takePicture() {
		console.log('Picture taken!');
	}


	$('#capture-button').hover(function() {
		$(this).addClass('hover');
		$('#capture-button .fa').addClass('hover');
	}, function() {
		$(this).removeClass('hover');
		$('#capture-button .fa').removeClass('hover');
	});

	$('#capture-button').click(function() {
		takePicture();
	});

})();
