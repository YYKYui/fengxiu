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
		var i = $(this).index(); //下标第一种写法
		//var i = $('.pagination').index(this);//下标第二种写法
		$(this).addClass('selected').siblings().removeClass('selected');
		$('#contents li').eq(i).show().siblings().hide();
		var li_dataDis = $(this).attr("data-dis")
		console.log("li_dataDis:"+li_dataDis)
		$(".buyi_more_show").each(function(){
			var data_hotvalue = $(this).attr("data-hot");
			
			var data_newvalue = $(this).attr("data-new");
			
			if(li_dataDis == data_hotvalue){
				$(this).hide();
			}else if(li_dataDis == data_newvalue){
				$(this).hide();
			}else{
				$(this).show();
			}
		})
	});
})
