$(document).ready(function() {
	
	$('.tabs a').on('click', function(ev){
		var currentTab = $(this).attr('href');
				
		$('.tab-content .current').removeClass('current');		
		
		$('.tab-content div:not(.current)').hide(300);
		$(currentTab).addClass('current').show(300);	

	});

});

