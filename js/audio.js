var $audio_element = $("audio");
	audio_element = $audio_element.get(0);
	
	function addSound(){
		var html_str = '';
		html_str += '<source src="beep.mp4" type="audio/mp4" />';
		html_str += '<source src="beep.ogg" type="audio/ogg" />';
		$(html_str).appendTo($audio_element);
	}
	
	function errorHandler(e){
		debugger;		
	}
	
	function wireUp() {
		$audio_element.children().on("error", errorHandler);
	}
	
	
	
(function(){
	addSound();
})();