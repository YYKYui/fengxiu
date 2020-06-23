$(function(){
	$(".confirm_shangpin").click(function(){
		var standard1 = $(":radio[name=standard][checked]").val();
		var standard2 = $(":radio[name=standard2][checked]").val();
		$(".standardtext").html("已选择：'" + standard1 + "','" + standard2 + "'")
	})
	$(".checked_shop").click(function(){
		var standard1 = $(":radio[name=standard][checked]").val();
		var standard2 = $(":radio[name=standard2][checked]").val();
		$(".standardtext").html("已选择：'" + standard1 + "','" + standard2 + "'")
	})
	//购物车数量增加
	$(".button_addshopcar").click(function(){
		$(".numberpro").addClass("number");
		$(".numberpro").text($("#amount").val())
	})
	
	//评价
	$(".click_pingjia,.back_carinfo").click(function(){
		if($(".evaluationpage").hasClass("active"))
		{
			$(".evaluationpage").removeClass("active");
			$(".evaluationpage").removeAttr("style");
		}else{
			$(".evaluationpage").addClass("active");
			$(".evaluationpage").css({
				"display":"block",
				"width":"100%",
				"z-index":"101",
				"height":$(window).height()+'px',
				"top":"0"
			});
		}
	})
	
})