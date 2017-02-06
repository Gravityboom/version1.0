function initFooter(){
    $("#footer").load("footer.html",function(){
        console.log("success");
    });
}
function navbtnclick(){
	$(".detail_nav>div>a").click(function(){
		/*for(var i = 0; i<$(".detail_nav>div>a").length; i++){
			$(".detail_nav>div>ul")[i].className = "btn_nav_hidden";
			$(".detail_nav>div>a").css({background:"url(ico_images/select.png) no-repeat right -21px"});
		}*/

		var name = $(this).next()[0].className;
		switch(name){
			case "btn_nav_hidden":
			$(this).next()[0].className = "btn_nav_show";
			$(this).css({background:"url(ico_images/select.png) no-repeat right 0"});
			$(this).parent().siblings('div').children('a').css({background:"url(ico_images/select.png) no-repeat right -21px"});
			$(this).parent().siblings('div').children('ul')[0].className = "btn_nav_hidden";
			break;

			case "btn_nav_show":
			$(this).next()[0].className = "btn_nav_hidden";
			$(this).css({background:"url(ico_images/select.png) no-repeat right -21px"});
			$(this).parent().siblings('div').children('a').css({background:"url(ico_images/select.png) no-repeat right -21px"});
			$(this).parent().siblings('div').children('ul')[0].className = "btn_nav_hidden";
			break;
		}
	});
}
function imgchange(){
	$(".product_show_small>span").click(function(){
		$(".product_show_img>img")[0].src = this.children[0].src;
	});
}
$(function(){
	initFooter();
	navbtnclick();
	imgchange();
});