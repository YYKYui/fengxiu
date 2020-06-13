$(function() {
	$(window).scroll(function() {
		//已经滚动到上面的页面高度
		var scrollTop = $(this).scrollTop();
		//页面高度
		var scrollHeight = $(document).height();
		//浏览器窗口高度
		var windowHeight = $(this).height();
		//此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
		if (scrollTop + windowHeight == scrollHeight) {
			console.log("111111")
		}
	});

	$('.pagination li').click(function() {
		$(".allin_fenlei").addClass("none");
		var i = $(this).index(); //下标第一种写法
		//var i = $('.pagination').index(this);//下标第二种写法
		$(this).addClass('selected').siblings().removeClass('selected');
		$('#contents li').eq(i).show().siblings().hide();
		$(this).text($(this).attr("data-title"))
		var li_dataDis = $(this).attr("data-dis")
		$(".buyi_more_show").each(function() {
			var data_hotvalue = $(this).attr("data-hot");
			var data_allin = $(this).attr("data-ali");
			var data_newvalue = $(this).attr("data-new");

			if (li_dataDis == data_hotvalue) {
				$(this).show();
			} else if (li_dataDis == data_newvalue) {
				$(this).show();
			} else if (li_dataDis == data_allin) {
				$(this).show();
			} else {
				$(this).hide();
			}
		})
	});

	$(".allin_show_fenlei").click(function() {
		if($(".allin_fenlei").css("display")=="none"){
			$(".allin_fenlei").removeClass("none");
		}else{
			$(".allin_fenlei").addClass("none")
		}
	});
	
	$(".allin_fenlei_div").click(function(){
		var data_miaoshu = $(this).attr("data-miaoshu");
		$(".allin_fenlei").addClass("none");
		$(".pagination li").removeClass('selected');
		$(".pagination li").eq(0).addClass("selected")
		$(".buyi_more_show").each(function() {
			var data_miaoshuvalue = $(this).attr("data-fenlei");
		
			if (data_miaoshu == data_miaoshuvalue) {
				$(this).show();
			}else {
				$(this).hide();
			}
			
		})
		$(".fenlei_title").text($(this).text())
		
		
	})
	
	$(".lode_more").click(function(){
		$(".buyi_Class_index").addClass("none")
		$(".more_neirong").removeClass("none")
	})
	$(".buyi_getmore").click(function(){
		$(".buyi_Class_index").addClass("none")
		$(".more_neirong").removeClass("none")
	})


})
