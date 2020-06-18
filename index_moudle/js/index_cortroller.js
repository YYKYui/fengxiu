$(function() {
	// upload docunment
	
	
	
	var loading_dst = $(".loading_dst");
	var timerPnghost;
	var huoqutimeer;
	var dst_zhenshu;
	var dst_zongzhenshu=0;
	var iswork = false;
	var imagedata;
	
	function errormessage_text(message){
		$(".error_message").removeClass("none");
		$(".error_message").text(message)
		var qingchu = window.setTimeout(function(){
			$(".error_message").addClass("none");
		},2000)	
	}
	$(".container_cortroller_jiben_1").click(function() {
		clearInterval(huoqutimeer);
		clearInterval(timerPnghost);
		if(imagedata == undefined){
			errormessage_text("请先上传花样，在进行缝绣操作")
			return false
		}
		var background_url = "./image/cro_icon/cor_jixu.png";
		$(".container_cortroller_jiben_1_icon").css("background", "url("+ background_url +") no-repeat");
		if(iswork == false){
			if($(".container_cortroller_message_zhenshu_math_1").val()==0){
				dst_zhenshu=0;
			}

			
			timerPnghost = setInterval(function() {
				dst_zongzhenshu = window.Android.zhenshu();
				if ((dst_zhenshu < dst_zongzhenshu) && (dst_zongzhenshu - dst_zhenshu >8)) {
					$(".container_cortroller_message_zhenshu_2").val(dst_zongzhenshu);
					$(".container_cortroller_message_zhenshu_math_1").val(dst_zhenshu);
					dst_zhenshu = dst_zhenshu + 8;
					window.Android.Imagepng(dst_zhenshu); //0 为整图 数值为针数
					imagedata = window.Android.Imagepng(dst_zhenshu);
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
					imagedata = window.Android.Imagepng(dst_zhenshu);
					if (imagedata == undefined) {
						$(".dst_zhanshi").text("传输失败请重新上传图片")
					} else {
						var draw_table = document.getElementById("draw_table");
						$("#draw_table").attr("src", "data:image/png;base64," + imagedata);

					}
				}
			}, 200);
			iswork = true;
		}else{
			var backgroundurl = "./image/cro_icon/cor_strat.png";
			$(".container_cortroller_jiben_1_icon").css("background", "url("+backgroundurl+") no-repeat");
			dst_zhenshu = dst_zhenshu;
			

			timerPnghost = setInterval(function() {
				dst_zongzhenshu = window.Android.zhenshu();
				if ((dst_zhenshu < dst_zongzhenshu) && (dst_zongzhenshu - dst_zhenshu >8)) {
					$(".container_cortroller_message_zhenshu_2").val(dst_zongzhenshu);
					$(".container_cortroller_message_zhenshu_math_1").val(dst_zhenshu);
					dst_zhenshu = dst_zhenshu + 0;
					window.Android.Imagepng(dst_zhenshu); //0 为整图 数值为针数
					imagedata = window.Android.Imagepng(dst_zhenshu);
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
					imagedata = window.Android.Imagepng(dst_zhenshu);
					if (imagedata == undefined) {
						$(".dst_zhanshi").text("传输失败请重新上传图片")
					} else {
						var draw_table = document.getElementById("draw_table");
						$("#draw_table").attr("src", "data:image/png;base64," + imagedata);
			
					}
				}
			}, 200);
			iswork = false;
			
		}

	})
	$(".container_cortroller_jiben_8").click(function() {
		if(dst_zhenshu == dst_zongzhenshu || dst_zhenshu == 0 || dst_zhenshu==undefined ||imagedata == undefined){
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
			
			huoqutimeer=setInterval(function(){
				clearInterval(timerPnghost)
				var dst_zongzhenshu = window.Android.zhenshu();
				$(".container_cortroller_message_zhenshu_2").val(dst_zongzhenshu);
				$(".container_cortroller_message_zhenshu_math_1").val("0");
				window.Android.Imagepng(0); //0 为整图 数值为针数
				imagedata = window.Android.Imagepng(0);
				if (imagedata == undefined) {
					$(".dst_zhanshi").text("传输失败请重新上传图片")
				} else {
					var draw_table = document.getElementById("draw_table");
					$("#draw_table").attr("src", "data:image/png;base64," + imagedata);
				}
			},1111)
		}else{			
			errormessage_text("工作中无法上传文件");
		}
	
	})
	
	$(".container_cortroller_jiben_2").click(function(){
		if(imagedata==undefined){
			errormessage_text("当前无文件");
			return false;
		}else{
			$(".motai_fixed").removeClass("none");
		}
	})
	$(".click_no").click(function(){
		$(".motai_fixed").addClass("none");
	});
	$(".click_yes").click(function(){
		$(".motai_fixed").addClass("none");
		clearInterval(huoqutimeer);
		clearInterval(timerPnghost);
		imagedata = undefined;
		dst_zhenshu=0;
		dst_zongzhenshu=0;
		$("#draw_table").attr("src", "");
		$(".container_cortroller_message_zhenshu_2").val("9999");
		$(".container_cortroller_message_zhenshu_math_1").val("0");
		var backgroundurl = "./image/cro_icon/cor_strat.png";
		$(".container_cortroller_jiben_1_icon").css("background", "url("+backgroundurl+") no-repeat");
		
	})
	var myCanvas = document.getElementById('wang_ge');
	var ctx = myCanvas.getContext('2d');
	var gridSize = 10;
	var canvasHeight = ctx.canvas.height;
	var canvasWidth = ctx.canvas.width;
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
	$(".container_cortroller_message_zhenshu").click(function(){
		if(imagedata==undefined){
			errormessage_text("请先上传花样")
		}else{
			$(".input_motai").removeClass("none")
		}
	})
	
	$(".is_inputmath_no").click(function(){	
		$(".input_zhenshu_num").val("");
		$(".input_motai").addClass("none");
	})
	
	$(".is_inputmath_yes").click(function(){
		var input_zhenshu_num = $(".input_zhenshu_num").val().trim();
		var zongshu = $(".container_cortroller_message_zhenshu_2").val().trim();
		if(input_zhenshu_num>zongshu){
			errormessage_text("针数不能超过"+zongshu+"针");
		}else if(input_zhenshu_num == ""){
			errormessage_text("输入值不能为空");
		}else{
			dst_zhenshu=input_zhenshu_num;
			console.log(dst_zhenshu)
			$(".input_motai").addClass("none");
		}
	})
	

})
