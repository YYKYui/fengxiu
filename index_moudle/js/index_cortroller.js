$(function() {
	// upload docunment

	var loading_dst = $(".loading_dst");

	$(".container_cortroller_jiben_1_icon").click(function() {
		window.Android.zhenshu(100)
	})
	$(".container_cortroller_jiben_8").click(function() {
		loading_dst.removeClass("none");
		var filenum = window.Android.filenum();
		filenum = filenum * 0.2;
		console.log(filenum)
		var get_listTimeout = setTimeout(function() {
			var mobilerestart = window.Android.intostart();
			if (mobilerestart == "true") {
				loading_dst.addClass("none");
				window.Android.Wenjian();
			} else {
				$(".loading_dst_tishi").text("读取花样列表失败，请退出重试")
			}
		}, filenum);



		var timerPnghost = setInterval(function() {
			window.Android.Imagepng(500); //0 为整图 数值为针数
			var imagedata = window.Android.Imagepng(500);
			if (imagedata == undefined) {
				$(".dst_zhanshi").text("传输失败请重新上传图片")
			} else {
				var draw_table = document.getElementById("draw_table");
				$("#draw_table").attr("src", "data:image/png;base64," + imagedata)
			}
		}, 1111);
	})


	var myCanvas = document.getElementById('wang_ge');
	var ctx = myCanvas.getContext('2d');
	var gridSize = 10;
	var canvasHeight = ctx.canvas.height;
	var canvasWidth = ctx.canvas.width;
	console.log(ctx.canvas.height);
	console.log(ctx.canvas.width);
	var xLineTotal = Math.floor(canvasHeight / gridSize);
	for (var i = 0; i <= xLineTotal; i++) {
		ctx.beginPath();
		ctx.moveTo(0, i * gridSize - 0.5); //canvasHeight=xlineTotal(也就是i)*gridSize
		ctx.lineTo(canvasWidth, i * gridSize - 0.5);
		ctx.background = '#fff';
		ctx.strokeStyle = '#eee';
		ctx.stroke();
	}
	var yLineTotal = Math.floor(canvasWidth / gridSize);
	for (var i = 0; i <= yLineTotal; i++) {
		ctx.beginPath();
		ctx.moveTo(i * gridSize - 0.5, 0);
		ctx.lineTo(i * gridSize - 0.5, canvasHeight);
		ctx.background = '#fff';
		ctx.strokeStyle = '#eee';
		ctx.stroke();
	}
	var wangge_star_off = true;
	$(".container_cortroller_jiben_background").click(function(){
		if(wangge_star_off){
			var dst_background = myCanvas.toDataURL('image/png', 1);
			$(".dst_zhanshi").css("background","url("+dst_background+") repeat");
			wangge_star_off = false;
		}else{
			$(".dst_zhanshi").css("background","#fff");
			wangge_star_off = true;
		}
	})

})
