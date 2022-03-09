/*		$(function() {
	$(".movie-thumb").on("click", function(){
			videoControl("playVideo",$(this).prev("iframe"));
			$(this).hide();
	});
	function videoControl(action,tgt){
		var $playerWindow = $(tgt)[0].contentWindow;
		$playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
	}
});*/

		
		
		$(function() {
		$(".movie-thumb01").on("click", function(){
				videoControl("playVideo",$(this).prev("iframe"));
				$(this).hide();
		});
		function videoControl(action,tgt){
			var $playerWindow = $(tgt)[0].contentWindow;
			$playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
		}
	});


