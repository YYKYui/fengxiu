$(function() {
 	$("#audio_btn").click(function() {
 		var music = document.getElementById("music");
 		if (music.paused) {
 			music.play();
 			$("#music_btn").attr("src", "play.png");
 		} else {
 			music.pause();
 			$("#music_btn").attr("src", "pause.png");
 		}
 	});
 	[]
 	a = $("span [class='swiper-pagination-bullet swiper-pagination-bullet-active']").index();
 	//alert(a);

 })
	
	function no_Errordanmu(){
		$(".error_nodanmu").addClass("none");
	}
 function send_reply2() {
 	var content = $("#reply-write").val();
 	if ($.trim(content) == "") {
 		$(".error_nodanmu").removeClass("none");
		window.setTimeout("no_Errordanmu()",2000)
 		return false;
 	}

 	var text = $("#reply-write").val();
 	var div = "<div style='font-size:22px;color:#eb9882;'><p>" + text + "</p></div>";
 	$("#reply-write").val("");
 	$(".d_show").append(div);
 	init_screen();

 }

 //弹幕一会显示一会消失
 // window.onload = function() {
 // 	setTimeout(show, 10000);
 // }
 //显示


 $(function() {
 	init_screen();
 });


 //考虑数据的交互，多久请求一下数据库
 $(document).ready(function() {
 	setInterval("startRequest()", 10000);
 });

 function startRequest() {
 	// id= $(".d_show").find("div:last").attr("id");
 	// $.ajax({
 	// type: 'post',
 	// url: 'demo.php?act=getdata',
 	// data: "id=" +id,
 	// dataType: 'json',
 	// success: function (data) {
 	html = "<div style='color:#ff0000;font-size:19px;'>NBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB!!!!!!!!!!!!</div>";
 	html += "<div style='color:#F39F1F;font-size:20px;'>如果有奇迹那么奇迹一定是红色</div>";
 	html += "<div style='color:#BF8DFF;font-size:20px;'>我的天呀~~~~~~~~~~~~~~~~~~</div>";
 	html += "<div style='color:#000067;font-size:18px;'>我学到了，你呢</div>";
 	html += "<div style='color:#C0504D;font-size:22px;'>老铁9888888</div>";
 	html += "<div style='color:#F39F1F;font-size:16px;'>配图小姐姐叫什么名字呀</div>";
 	html += "<div style='color:#BF8DFF;font-size:20px;'>配图好漂亮</div>";
 	html += "<div style='color:#000067;font-size:22px;'>说罢什么时候上限</div>";
 	html += "<div style='color:#F39F1F;font-size:18px;'>你骗到我的赞了</div>";
 	html += "<div style='color:#BF8DFF;font-size:16px;'>厉害了我的缝绣家园</div>";
 	html += "<div style='color:#000067;font-size:14px;'>yoooooooooooooooooooooooooooooooo~</div>";
 	// for (var i = 0; i < data.length; i++) {
 	//  html+= "<div id="+data[i].id+" style='font-size:" +data[i].size+ ";color:"+data[i].color+"'><p>"+data[i].username+":"+data[i].content+"</p></div>";
 	// }
 	// //$(".d_show").children().remove();
 	$(".d_show").append(html);
 	init_screen();

 	// num=$(".d_show").find("div").length;
 	// if(num>30){
 	// $(".d_show").find("div:lt(20)").remove();  
 	//}      
 	// },
 	// });
 	// //init_screen();
 }

 function init_screen() {
 	var _top = 0;
 	$(".d_show").find("div").show().each(function() {
 		var _left = $(window).width() - $(this).width() + 520;
 		var _height = $(window).height();
		
 		_top = _top + 36;
 		if (_top >= (_height-100)) {
 			_top = 0;
 		}
 		$(this).css({
 			left: _left,
 			top: _top
 		});
 		var time = 10000;
 		if ($(this).index() % 2 == 0) {
 			time = 12000;
 		}
 		if ($(this).index() % 3 == 0) {
 			time = 14000;
 		}
 		if ($(this).index() % 4 == 0) {
 			time = 16000;
 		}
 		if ($(this).index() % 5 == 0) {
 			time = 18000;
 		}
 		if ($(this).index() % 7 == 0) {
 			time = 20000;
 		}
 		if ($(this).index() % 8 == 0) {
 			time = 23000;
 		}
 		$(this).animate({
 			left: "-" + _left + "px"
 		}, time, function() {});
 	});
 }

 //随机获取颜色值
 function getReandomColor() {
 	return '#' + (function(h) {
 		return new Array(7 - h.length).join("0") + h
 	})((Math.random() * 0x1000000 << 0).toString(16))
 }


$(".star_offdanmu").click(function(){
	var liuyan_button = $(".liuyan_button");
	if($(".liuyan_button").css("display")=="none"){
		$(".dm_caozuo").addClass("none");
		$(".liuyan_button").removeClass("none");
		$(".danmu_context").addClass("none");
		$(".star_offdanmu").text("开启弹幕")
	}else{
		$(".dm_caozuo").removeClass("none");
		$(".liuyan_button").addClass("none");
		$(".danmu_context").removeClass("none");
		$(".star_offdanmu").text("关闭弹幕")
	}
})

