$(function(){
	$.ajax({
	   url: "../json/liuyan_message.json", //url
	   type: "GET",//请求方式为get
	   dataType: "json", //返回数据格式为json
	   success: function(data) {//请求成功完成后要执行的方法 
	       //each循环 使用$.each方法遍历返回的数据date
		   $(".zixun_content_liuyan_document_load").addClass("none");
		   if(data != undefined){
			   $(".zixun_content_liuyan_title_math").text(data.info.length);
			   $(".zixun_content_liuyan_document_none").addClass("none");
			   $(".zixun_content_liuyan_document_have").removeClass("none");
			   $.each(data.info, function(i, item) {
			   		$("#tml_liuyancontent").tmpl(data.info[i]).appendTo(".zixun_content_liuyan_document_have")
			   })
		   }else{
			   $(".zixun_content_liuyan_title_math").text(data.info.length());
			   $(".zixun_content_liuyan_document_none").removeClass("none");
			   $(".zixun_content_liuyan_document_have").addClass("none");
		   }
	       
	   },
	   error: function(){
		   $(".zixun_content_liuyan_document_load").text("网络连接故障");
	   }
	})
})