// Scroll suave para link interno
$('nav a').click(function(e){
	e.preventDefault();
    /*console.log(this);*/
	var id = $(this).attr('href'),
		menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 1000);
    /*console.log(id);
	console.log(targetOffset);*/
});
