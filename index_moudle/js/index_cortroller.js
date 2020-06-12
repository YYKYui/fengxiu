$(function(){
	// upload docunment
	
	var loading_dst = $(".loading_dst");
	
	
	$(".container_cortroller_jiben_8").click(function(){
		loading_dst.removeClass("none");
		var filenum = window.Android.filenum();
		filenum = filenum*0.2;
		var get_listTimeout = setTimeout(function(){
			var mobilerestart = window.Android.intostart();
			if(mobilerestart == "true"){
				loading_dst.addClass("none");
				window.Android.Wenjian();
			}else{
				$(".loading_dst_tishi").text("读取花样列表失败，请退出重试")
			}
		},filenum+1);
		
		
		
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