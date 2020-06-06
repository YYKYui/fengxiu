var urlname = window.location.pathname;
urlname = urlname.substring(urlname.lastIndexOf('/') + 1, urlname.length);
if(urlname == "index.html"){
	$(".search_text").removeClass("none")
	$(".title_text").addClass("none")
}else{
	$(".title_text").removeClass("none")
	$(".search_text").addClass("none")
}