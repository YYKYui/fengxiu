$(function() {
	$('#contents li').eq(0).show().siblings().hide();
	$('.pagination li').click(function() {
		var i = $(this).index(); //下标第一种写法
		//var i = $('.pagination').index(this);//下标第二种写法
		$(this).addClass('selected').siblings().removeClass('selected');
		$('#contents li').eq(i).show().siblings().hide();
	});
})
