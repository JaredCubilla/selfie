(function() {
	'use strict';


	var streaming = false,
		video = document.querySelector('#video'),
		width = 500,
		height = 0,
		ctx = document.querySelector('#canvas').getContext('2d');

	navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

	navigator.getMedia({video: true, audio: false}, function(stream) {
		if (navigator.mozGetUserMedia) {
			$('#video').mozSrcObject = stream;
		} else {
			var url = window.URL || window.webkitURL;
			$('#video').attr('src', url.createObjectURL(stream));
		}

		video.play();
	}, function(error) {
		console.log('Dun dun dun! ' + error);
	});

	video.addEventListener('canplay', function(e) {
		if (!streaming) {
			height = video.videoHeight / (video.videoWidth/width);

			$('#video').attr({
				width: width,
				height: height
			});

			$('#canvas').attr({
				width: width,
				height: height
			});

			ctx.translate(width, 0);
			ctx.scale(-1, 1);

			streaming = true;
		}
	}, false);

	function takePicture() {
		console.log('Picture taken!');

		ctx.drawImage(video, 0, 0, width, height);
		$('#image').attr('src', canvas.toDataURL('image/png'));
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

	if (!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)) {
		console.log('User media not supported.');
	}

})();
