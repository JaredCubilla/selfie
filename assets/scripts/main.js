console.log('test');


$('#capture-button').hover(function() {
	'use strict';
	$(this).addClass('hover');
	$('#capture-button .fa').addClass('hover');
}, function() {
	'use strict';
	$(this).removeClass('hover');
	$('#capture-button .fa').removeClass('hover');
});
