$(function() {
	var checkStrLengths = function(str, maxLength) {
		var maxLength = maxLength;
		var result = 0;
		if (str && str.length == maxLength) {
			result = maxLength;
			$(".error_message_xianshi").removeClass("none");
			$(".error_message_xianshi").text("超出最大字数限制")
		} else {
			result = str.length;
			$(".error_message_xianshi").addClass("none");
			$(".error_message_xianshi").text("")
		}
		return result;
	}

	function myTrim(x) {
		return x.replace(/^\s+|\s+$/gm, '');
	}
	//将输入内容保存至json文件
	function saveHandler(mesage){
	    var data = {
	        name:"liuyan_message",
	        message:mesage
	    }
	    var content = JSON.stringify(data);
	    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
	    saveAs(blob, "./json/liuyan_message.json");
	}
	//监听输入
	$(".liuyan-message").on('input propertychange', function() {

		//获取输入内容
		var userDesc = $(this).val();

		//判断字数
		var len;
		if (userDesc) {
			len = checkStrLengths(userDesc, 120);
		} else {
			len = 0
		}

		//显示字数
		$(".word_math").html(len + '/120');
	});

	$(".submit_button").click(function() {

		var liuyan_message = $(".liuyan-message").val().toString();
		liuyan_message = myTrim(liuyan_message);
		console.log(liuyan_message)
		if (liuyan_message == "") {
			$(".error_message_xianshi").removeClass("none");
			$(".error_message_xianshi").text("提交内容不能为空");
		} else {
			$.ajax({
				type: "GET", //方法类型
				dataType: "json", //预期服务器返回的数据类型
				url: "./json/liuyan_message.json", //url
				data: $('#liuyan_from').serialize(),
				success: function(result) {
					console.log(result); //打印服务端返回的数据(调试用)
					// saveHandler(liuyan_message);
					$(".error_message_xianshi").removeClass("none");
					$(".error_message_xianshi").text("提交成功");
					window.history.back();
				},
				error: function() {
					$(".error_message_xianshi").removeClass("none");
					$(".error_message_xianshi").text("提交失败");
				},

			});

		}

	})



})
