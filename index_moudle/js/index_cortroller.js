$(function(){
	// upload docunment
	var mobilerestart = window.Android.intostart;
	if(mobilerestart == true){
		$(".loading_dst").addClass("none");
	}else{
		$(".loading_dst_tishi").text("读取花样列表失败，请退出重试")
	}
	
	
	$(".container_cortroller_jiben_8").click(function(){
		window.Android.Wenjian();
		var timerPnghost = setInterval(function(){
			window.Android.Imagepng();
			var imagedata = window.Android.Imagepng();
			if(imagedata==undefined){
				$(".dst_zhanshi").text("传输失败请重新上传图片")
			}else{
				var draw_table = document.getElementById("draw_table");
				$("#draw_table").attr("src", "data:image/png;base64," + imagedata)
			}
		},1111);
	})
	
		
		
		
})