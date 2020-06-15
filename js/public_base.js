$(function(){
	$("#header").load("./templates/header.html")
	$("#footer").load("./templates/footer.html")
	$("a").each(function(){
		var a_link = $(this)
		console.log(a_link.attr("href"))
		a_link.click(function(){
			if(a_link.attr("href")==""){
				alert("该功能正在开发中，会在后续版本中更新")
			}
			
		})

	})
});