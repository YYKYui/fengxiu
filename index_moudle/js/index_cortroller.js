$(function() {
	// upload docunment
	
	var loading_dst = $(".loading_dst");
	var timerPnghost;
	var huoqutimeer;
	var dst_zhenshu;
	var dst_zongzhenshu;
	$(".container_cortroller_jiben_1").click(function() {
		clearInterval(huoqutimeer);
		if(dst_zhenshu==undefined){
			dst_zhenshu=0;
			dst_zongzhenshu = window.Android.zhenshu();
			console.log(dst_zongzhenshu)
			timerPnghost = setInterval(function() {
				if ((dst_zhenshu < dst_zongzhenshu) && (dst_zongzhenshu - dst_zhenshu >8)) {
					$(".container_cortroller_message_zhenshu_2").val(dst_zongzhenshu);
					$(".container_cortroller_message_zhenshu_math_1").val(dst_zhenshu);
					dst_zhenshu = dst_zhenshu + 8;
					window.Android.Imagepng(dst_zhenshu); //0 为整图 数值为针数
					var imagedata = window.Android.Imagepng(dst_zhenshu);
					if (imagedata == undefined) {
						$(".dst_zhanshi").text("传输失败请重新上传图片")
					} else {
						var draw_table = document.getElementById("draw_table");
						$("#draw_table").attr("src", "data:image/png;base64," + imagedata);

					}
				} else {
					dst_zhenshu = dst_zongzhenshu;
					$(".container_cortroller_message_zhenshu_2").val(dst_zongzhenshu);
					$(".container_cortroller_message_zhenshu_math_1").val(dst_zhenshu);
					window.Android.Imagepng(dst_zhenshu); //0 为整图 数值为针数
					var imagedata = window.Android.Imagepng(dst_zhenshu);
					if (imagedata == undefined) {
						$(".dst_zhanshi").text("传输失败请重新上传图片")
					} else {
						var draw_table = document.getElementById("draw_table");
						$("#draw_table").attr("src", "data:image/png;base64," + imagedata);

					}
				}
			}, 200);
		}else if(dst_zhenshu>0){
			
			
		}

	})
	$(".container_cortroller_jiben_8").click(function() {
		if(dst_zhenshu == dst_zongzhenshu && dst_zhenshu == 0){
			loading_dst.removeClass("none");
			var filenum = window.Android.filenum();
			filenum = filenum * 0.2;
			var get_listTimeout = setTimeout(function() {
				var mobilerestart = window.Android.intostart();
				if (mobilerestart == "true") {
					loading_dst.addClass("none");
					window.Android.Wenjian();
				} else {
					$(".loading_dst_tishi").text("读取花样列表失败，请退出重试")
				}
			}, filenum);
			
			clearTimeout(get_listTimeout)
			huoqutimeer=setInterval(function(){
				clearInterval(timerPnghost)
				var dst_zongzhenshu = window.Android.zhenshu();
				$(".container_cortroller_message_zhenshu_2").val(dst_zongzhenshu);
				$(".container_cortroller_message_zhenshu_math_1").val(dst_zhenshu);
				window.Android.Imagepng(0); //0 为整图 数值为针数
				var imagedata = window.Android.Imagepng(0);
				if (imagedata == undefined) {
					$(".dst_zhanshi").text("传输失败请重新上传图片")
				} else {
					var draw_table = document.getElementById("draw_table");
					$("#draw_table").attr("src", "data:image/png;base64," + imagedata)
				}
			},1111)
		}else{
			$(".error_message").removeClass("none");
			$(".error_message").text("工作中无法上传文件")
			var qingchu = window.setTimeout(function(){
				$(".error_message").addClass("none");
			},2000)
			clearTimeout(qingchu);
		}
	
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
	$(".container_cortroller_jiben_6").click(function() {
		if (wangge_star_off) {
			var dst_background = myCanvas.toDataURL('image/png', 1);
			$(".dst_zhanshi").css("background", "url(" + dst_background + ") repeat");
			wangge_star_off = false;
		} else {
			$(".dst_zhanshi").css("background", "#fff");
			wangge_star_off = true;
		}
	})

})
