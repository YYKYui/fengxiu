$(function() {
	$(".form-a").on('click', function() {
		$(".citylist").show();
	})
	$(".form-a").cityChoose({
		prov: "天津",
		city: "天津",
		dist: "宝坻区",
		nodata: "none"
	});
	$("#addressadd").on('click', function() {
		window.location.href = "submit_dingdan.html"
		//提交成功执行
		/*$("#result").attr("data-state",true)
		$("#result").prepend('<div><ul><li><label>姓名：</label>新加</li><li>'
					+'<label>手机：</label>13309877890'
					+'<label class="postcode">邮编：</label>098909</li>'
				  +'<li><label>地址：</label>上海 上海市 浦东新区 成慧路098</li>'
					+'</ul>'
					+'<div class="hidebtn-group">'
					+'<a class="btn-edit" href="address-form.html"><i>编辑</i></a>'
					+'<a class="btn-del"><i>删除</i></a>'
					+'</div></div>');*/
	})
});
