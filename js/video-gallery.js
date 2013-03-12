$(document).ready(function() {
	$('a.videoLink').each(funciton() {

	$(this).css('border','solid red 1px');
	/*
		var thumbnailFilePath = 'video/'+$(this).attr('videofile')+'.jpg';
		var videoCaption = $(this).attr('videocaption');
		
		$(this).css('background-image','url('+thumbnailFilePath'+)');
		$(this).html('<div class="caption">'+videoCaption+'</div><img src="images/play_icon.png" class="play"/>')
		*/
	});
	
});