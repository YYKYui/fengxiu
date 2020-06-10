$(function(){
	if ($(".have_content").length==0) {
		$(".no_content").removeClass("none")
		$(".have_content").addClass("none")
		return;
	}else{
		$(".no_content").addClass("none")
		$(".have_content").removeClass("none")
	}
	
	if($(".have_content").height()<(window.innerHeight-100)){
		$(".container_supercortroller").addClass("no_touch");
	}else{
		$(".container_supercortroller").removeClass("no_touch");
	}
})