
$(function(){
	//swal("成功", "这个窗口成功弹出");
	//swal("失败", "这个窗口成功弹出", "error");
	$(".popaddress_adrsss").click(function(){
		$(".addresslists").show();
	})
	$("#buy").on('click',function(){
		swal({
			title: "请确认无误购买？",
			text: "此处为提示框",
			confirmButtonText: "确定",
			cancelButtonText: "取消",
			showCancelButton: true,
		},function(){
			//swal("失败", "这个窗口弹出", "error");
			window.location.href='pay.html'
		})
		/*swal({
			title: "确定删除吗?",
			text: "Your will not be able to recover this imaginary file!",
			type: "success",
			showCancelButton: true,
		},function(){
			//swal("失败", "这个窗口弹出", "error");
			window.location.href='pay.html'
		})*/
	})

	$(".addresslists>div").swipe( {
        tap:function(event, target) {
					$(".addresslists").hide();
					$(this).find("ul").addClass("active");
					$(this).siblings("div").find("ul").removeClass("active");
					var address = $(this).find("ul").html();
					$(".address ul").html(address);
        }
	})

	$('.spinners').spinner();


})