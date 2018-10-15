


	$('body').click(function () {
	$('.menu-right').removeClass('menu-slide');

});


$('#menu-btn').click(function(event, handler) {

	event.stopPropagation();
	
	$('.menu-right').toggleClass('menu-slide');
	
	
	});
	
 


//submenu




if (document.documentElement.clientWidth < 980) 
{
$('.submenu-btn').click(function(event, handler) {

	event.stopPropagation();
	var thismenu = $(this).find('.submenu');
		$('.submenu-btn').find('.submenu').not(thismenu).removeClass('submenu-slide');
	
	$(this).find('.submenu').toggleClass('submenu-slide');
	});
}
	




