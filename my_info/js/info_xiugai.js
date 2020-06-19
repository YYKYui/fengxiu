var timericonstruc;
$(function(){
	$(".change_touxiang").click(function(){
		window.Android.photolist();
		timericonstruc=setInterval(function(){
			var isok_img = window.Android.gettrue();
			if(isok_img==true){
				window.Android.phototrue();
				var imgdata = window.Android.phototrue();
				$(".img_icon").attr("src","data:image/png;base64," + imagedata);
				clearInterval(timericonstruc);
			}
		},200)
	})
})