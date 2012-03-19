$(document).ready(function() {
	
	$('.tabs a').on('click', function(ev){
		var currentTab = $(this).attr('href');		
		var clicked = $(this).attr('href');
		
		$('.current').slideUp(300);
		$('.current').removeClass('current');
		$(currentTab).removeClass('current');
		$(currentTab).addClass('current');
		
		if(currentTab == clicked){
			$(clicked).slideDown(300);
		}
	});
});