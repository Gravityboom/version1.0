/*$(function(){
	//console.log($("#advertisement_top"));
});

$(document).ready(function(){
	advertisementTopStyle();
	console.log($("#advertisement_top"));
})

function advertisementTopStyle(){
	$("#advertisement_top").css({"background-color":"#f3d071","height":"80px"});
}*/
/*$(function(){
	$("#close_adv").click(function(){
		var _timer = 0;
		var _top =$("#advertisement_top")[0].offsetHeight;
		(function closeAd(){
			window.clearTimeout(_timer);
			console.log(1);
			_top -= 6;
			if(_top>0){
				$("#advertisement_top")[0].style.height = _top+"px";
			}else{
				$("#advertisement_top")[0].style.height="0";
				$("#advertisement_top")[0].style.display="none";
				clearTimeout(_timer);
			}
			_timer = setTimeout(closeAd,20);
		})();
	});
});*/
function banner2(){
	var _index = 0;
	var _banner = $(".banner2_main")[0];
	_banner.timer = setInterval(move,1000);

	$(".banner2_main").mouseover(function() {
		$(".banner2_main>a").css({"display":"block"});
		clearInterval(_banner.timer); 
	});

	$(".banner2_main").mouseout(function() {
		$(".banner2_main>a").css({"display":"none"});
		_banner.timer = setInterval(move,1000); 
	});

	function move(){
		
		if(_index>=2){_index=0;}
		if(_index<0){_index=1;}
		for(var j = 0 ;j < 2;j++){
			/*所有ul隐藏*/
			$(".banner2_main>ul")[j].style.display = "none";
			$(".banner2_main>p span")[j].className = "banner_off";
		}
		$(".banner2_main>ul")[_index].style.display = "block";
		$(".banner2_main>p span")[_index].className = "banner_on";
		_index++;
	}

	for(var n = 0; n < 2;n++){
		$(".banner2_main>p span")[n].index = n;
		/*$(".banner2_main")[n]*/
		//console.log($(".banner2_main>p span")[n].index);//0和1
	}

	$(".banner2_main>p span").mouseover(function(){
		for(var i = 0;i < 2;i++){
			$(".banner2_main>p span")[i].className = "banner_off";
		}
		this.className = "banner_on";
		_index = this.index;
		move();
	});


	$(".toRight").click(function(){
		console.log(_index);
		move();
	});

	$(".toLeft").click(function(){
		_index-=2;
		move();
	});
}

function banner(){
	var _index = 0;		//定义全局变量_index为当前播放的编号
	var _box = $("#banner")[0];//获取网页中的div "banner"
	var _div = $("#banner div").get();		//获取banner下6个子元素div,组成集合
	//console.log(_box,_div);
	var _points = $("#points span").get();
	var colorArr = [];
	_box.timer = setInterval(lunbo,1000)//设置全局计时器
	$.post("json/banner_images.json?flag=" + 100*Math.random(),null, function(data,textStatus){
		var _img = null;
		for(var i = 0;i < _div.length;i++){
			colorArr.push(data["color"][i]);
			_img = document.createElement("img");
			_img.src = data["images"][i];
			_div[i].appendChild(_img);
			_points[i].innerHTML = data["introduction"][i];
		}
		$(".banner_container")[0].style.backgroundColor = colorArr[0];
	});

	_box.onmouseover = function(){
		$(".banner_arrow").css({"display":"block"});
		clearInterval(_box.timer);
	}

	_box.onmouseleave = function(){
		$(".banner_arrow").css({"display":"none"});
		_box.timer = setInterval(lunbo,1000);
	}

	function lunbo(){
		/*使所有图片消失*/
		if(_index >= _div.length){
			_index = 0;
		}
		if(_index < 0){
			_index = _div.length-1;
		}
		for(var i = 0;i < _div.length;i++){
			_div[i].className = "hidden_banner";
			_points[i].className = "btn_close"
		}
		/*当前图片出现*/
		_div[_index].className = "show_banner";
		_points[_index].className = "btn_open";
		$(".banner_container")[0].style.backgroundColor = colorArr[_index];
		_index++;
	}

	for(var i = 0;i < _points.length;i++){
		_points[i].index = i;//给每个块设置自定义属性index
		_points[i].onmouseover=function(){
			for(var j = 0;j < _points.length; j++){
				_points[j].className = "btn_close";
			}
			this.className = "btn_open";
			_index = this.index;
			lunbo();
		}
	}

	$(".banner_arrow").first().click(function(){
		_index -= 2;
		lunbo();
	});

	$(".banner_arrow").first().next().click(function(){
		lunbo();
	});
	
}


function closeAd(){
	var _close = $("#close_adv")[0];
	var _topAd = $("#advertisement_top")[0];
	var _timer = 0;
	var _top = _topAd.offsetHeight;
	function start(){
		_top -= 6;
		window.clearTimeout(_timer);
		if(_top>0){
			_topAd.style.height = _top + "px";
			window.setTimeout(start,20);
		}
		else{
			_topAd.style.height = "0";
			_topAd.style.display = "none";
		}
	}
	start();
}

function markWeb(){
	alert("按Ctrl+D , 即可添加到 \' 收藏 \' 。")
}

function showMystreet(){
	/*console.log($(this).children("div")[0]);*/
	$(this).children("div")[0].style.display = "block";
	$(this)[0].style.backgroundColor = "#fff";
	$(this).children("a")[0].style.backgroundPosition = "right -93px";
}

function hiddenMystreet(){
	$(this).children("div")[0].style.display = "none";
	$(this)[0].style.backgroundColor = "#f5f5f5";
	$(this).children("a")[0].style.backgroundPosition = "right -65px";
}

function openNav(){
	$(this).next()[0].style.display = "block";
}
function closeNav(){
	$("#nav_list")[0].style.display = "none";
}
function scrollNav(){
	console.log(1);
}
function eventHandle(){
	var getmoreIndex = 0;
	$("#close_adv")[0].onclick = closeAd;
	$("#web_mark")[0].onclick = markWeb;
	$("#street11")[0].onmouseover = showMystreet;
	$("#street11")[0].onmouseout = hiddenMystreet;
	$("#language_container")[0].onmouseover = showMystreet;
	$("#language_container")[0].onmouseout = hiddenMystreet;
	$("#nav_btn")[0].onclick = openNav;
	$("#nav_btn_close")[0].onclick = closeNav;
	$("#nav_btn_close2")[0].onclick = closeNav;

	$(".banner2_main>ul>li>div").mouseover(function(){
		$(this).children("div.box_shadow")[0].style.display = "block";
	});
	$(".banner2_main>ul>li>div").mouseout(function(){
		$(this).children("div.box_shadow")[0].style.display = "none";
	});

	$(".aside_category>li").mouseover(function(){
		$(this).children(".category_detail")[0].style.display = "block";
		if($(this)[0]===$(".aside_category>li")[0]){
			$(this).css({"borderTop":"2px solid #484a56"})
		}
		$(this).css({"backgroundColor":"#fff"});
		$(this).children("a").css({"color":"#f22a2c","background":"url(ico_images/category_arrow2.png) no-repeat right 20px"})
		$(this).children("a").children("span").css({"color":"#424242"})
	});

	$(".aside_category>li").mouseout(function(){
		$(this).children(".category_detail")[0].style.display = "none";
		$(this).css({"backgroundColor":"#484a57","borderTop":"none"});
		if($(this)[0]===$(".aside_category>li")[0]){
			$(this).css({"borderTop":"2px solid transparent"})
		}
		$(this).children("a").css({"color":"#fff","background":"url(ico_images/category_arrow1.png) no-repeat right 20px"})
		$(this).children("a").children("span").css({"color":"#dbdbdb"})
	});

	$(window).scroll(function(){
		if($("body").scrollTop()>$(".nav_main_container").offset().top){
			$(".nav_main_container")[0].style.position = "fixed";
			$(".nav_main_container")[0].style.top = "0";
			$(".nav_cart")[0].style.display = "inline-block";
			$(".home_web")[0].style.display = "block";
			$(".aside_ad")[0].style.position = "fixed";
			$(".aside_ad")[0].style.top = "60px";
		}
		if($("body").scrollTop()<=218){
			$(".nav_main_container")[0].style.position = "relative";
			$(".home_web")[0].style.display = "none";
			$(".nav_cart")[0].style.display = "none";
			$(".aside_ad")[0].style.position = "absolute";
			$(".aside_ad")[0].style.top = "20px";
		}
	});

	/*用户名登录*/
	if(window.location.href.indexOf("user=")>0){
		var _url = window.location.href.match(/user=\w+/g)[0].replace(/user=/g,"");
		$("#top_nav_right").children("li").children("a")[0].innerHTML = "欢迎，"+_url;
		$("#top_nav_right").children("li").children("a")[0].href = "javascript:void(0)";
	}


	/*返回顶部*/
	$("#return_top").click(function(){
		$("body").animate({"scrollTop":0},800);
	});


	$(".hot_sale_header>a").click(function(){
		if(getmoreIndex==0){
			$(this).css({
				"background": 'url(ico_images/arrow6.png) no-repeat 149px -9px',
			});
			$(".hot_sale_header>ul").slideDown(300,function(){
				getmoreIndex = 1;
			});
		}
	});

	$(".hot_sale_header>a").click(function(){
		if(getmoreIndex==1){
			$(this).css({
				"background": 'url(ico_images/arrow6.png) no-repeat 149px 16px',
			});
			$(".hot_sale_header>ul").slideUp(300,function(){
				getmoreIndex = 0;
			});
		}
	});


	for(var a=0;a<$(".scrolling_adv a").get().length;a++){
		$(".scrolling_adv a").get()[a].style.left = a*190+"px";
		$(".scrolling_adv_2 a").get()[a].style.left = a*190+"px";
	}

	$(".rolling_next").click(function(){
		if($(".scrolling_adv")[0].offsetLeft%190==0){
			$(".scrolling_adv").animate({
				"left": $(".scrolling_adv")[0].offsetLeft+190+"px"},
				100,function(){
					if($(".scrolling_adv")[0].offsetLeft==4370){
					$(".scrolling_adv").css({left:"-4370px"});
					}
					if($(".scrolling_adv")[0].offsetLeft==0){
						$(".scrolling_adv_2").css({left:"-437px"});
					}
			});
			$(".scrolling_adv_2").animate({
				"left": $(".scrolling_adv_2")[0].offsetLeft+190+"px"},
				100,function(){
					if($(".scrolling_adv")[0].offsetLeft==0){
					$(".scrolling_adv_2").css({left:"-4370px"});
					}
				});
		}
	});
	$(".rolling_pre").click(function(){
		if($(".scrolling_adv")[0].offsetLeft%190==0){
			$(".scrolling_adv").animate({
			"left": $(".scrolling_adv")[0].offsetLeft-190+"px"},
			100,function(){
				if($(".scrolling_adv")[0].offsetLeft==-3230){
				$(".scrolling_adv_2").css({left:"1140px"});
				}
				if($(".scrolling_adv")[0].offsetLeft==-7600){
					$(".scrolling_adv").css({left:"1140px"});
				}
			});

			$(".scrolling_adv_2").animate({
			"left": $(".scrolling_adv_2")[0].offsetLeft-190+"px"},
			100,function(){
				if($(".scrolling_adv")[0].offsetLeft==-3230){
				$(".scrolling_adv_2").css({left:"1140px"});
				}
				if($(".scrolling_adv")[0].offsetLeft==-7600){
					$(".scrolling_adv").css({left:"1140px"});
				}
			});
		}
	});

	for(var a=0;a<$(".scrolling_adv_o a").get().length;a++){
		$(".scrolling_adv_o a").get()[a].style.left = a*190+"px";
		$(".scrolling_adv_2_o a").get()[a].style.left = a*190+"px";
	}

	$(".rolling_next_o").click(function(){
		if($(".scrolling_adv_o")[0].offsetLeft%190==0){
			$(".scrolling_adv_o").animate({
				"left": $(".scrolling_adv_o")[0].offsetLeft+190+"px"},
				100,function(){
					if($(".scrolling_adv_o")[0].offsetLeft==4370){
					$(".scrolling_adv_o").css({left:"-4370px"});
					}
					if($(".scrolling_adv_o")[0].offsetLeft==0){
						$(".scrolling_adv_2_o").css({left:"-437px"});
					}
			});
			$(".scrolling_adv_2_o").animate({
				"left": $(".scrolling_adv_2_o")[0].offsetLeft+190+"px"},
				100,function(){
					if($(".scrolling_adv_o")[0].offsetLeft==0){
					$(".scrolling_adv_2_o").css({left:"-4370px"});
					}
				});
		}
	});
	$(".rolling_pre_o").click(function(){
		if($(".scrolling_adv_o")[0].offsetLeft%190==0){
			$(".scrolling_adv_o").animate({
			"left": $(".scrolling_adv_o")[0].offsetLeft-190+"px"},
			100,function(){
				if($(".scrolling_adv_o")[0].offsetLeft==-3230){
				$(".scrolling_adv_2_o").css({left:"1140px"});
				}
				if($(".scrolling_adv_o")[0].offsetLeft==-7600){
					$(".scrolling_adv_o").css({left:"1140px"});
				}
			});

			$(".scrolling_adv_2_o").animate({
			"left": $(".scrolling_adv_2_o")[0].offsetLeft-190+"px"},
			100,function(){
				if($(".scrolling_adv_o")[0].offsetLeft==-3230){
				$(".scrolling_adv_2_o").css({left:"1140px"});
				}
				if($(".scrolling_adv_o")[0].offsetLeft==-7600){
					$(".scrolling_adv_o").css({left:"1140px"});
				}
			});
		}
	});}

function initNavList(){
	$.post("json/nav_list.json?flag="+Math.random()*100, null, function(data,textStatus) {
		//console.log(data["list1"][0]["list2"].length);按照二级标题长度创建元素
		var _dl = null;
		var _dt = null;
		var _dd = null;
		var _li = null;
		var _div = $(".category_detail");
		var nav_list_dl = null;
		var nav_list_dt = null;
		var nav_list_dd = null;
		var _strong = null;
		var nav_list_ul = null;
		var nav_list_li = null;
		var nav_list_div = null;
		var _strong2 = null;
		for(var z = 0; z < 3;z++){
			//console.log($(".aside_category>li").children("a")[z]);
			$(".aside_category>li").children("a")[z].firstChild.nodeValue = data["list1"][z]["name"];
			$(".aside_category>li>a>span")[z].innerHTML = data["list1"][z]["introduction"];

			nav_list_dl = document.createElement("dl");
			nav_list_dt = document.createElement("dt");
			nav_list_dd = document.createElement("dd");
			nav_list_ul = document.createElement("ul");
			_strong = document.createElement("strong");
			_strong.innerHTML = data["list1"][z]["name"];

			for(var i = 0; i < data["list1"][z]["list2"].length;i++){
				_dl = document.createElement("dl");
				_dt = document.createElement("dt");
				_dt.innerHTML = data["list1"][z]["list2"][i]["name"];
				_dd = document.createElement("dd");

				nav_list_dt.appendChild(_strong);
				nav_list_li = document.createElement("li");
				_strong2 = document.createElement("strong");
				_strong2.innerHTML = data["list1"][z]["list2"][i]["name"];
				nav_list_div = document.createElement("div");


				for(var j = 0; j < data["list1"][z]["list2"][i]["list3"].length ;j++){
					_li =document.createElement("li");
					_li.innerHTML = data["list1"][z]["list2"][i]["list3"][j];
					_dd.appendChild(_li);

					nav_list_a = document.createElement("a");
					nav_list_a.innerHTML = data["list1"][z]["list2"][i]["list3"][j];
					nav_list_div.appendChild(nav_list_a);
				}
				_dl.appendChild(_dt);
				_dl.appendChild(_dd);
				_div[z].appendChild(_dl);
				
				nav_list_li.appendChild(_strong2);
				nav_list_li.appendChild(nav_list_div);
				nav_list_ul.appendChild(nav_list_li);
				nav_list_dd.appendChild(nav_list_ul);
			}
			nav_list_dl.appendChild(nav_list_dt);
			nav_list_dl.appendChild(nav_list_dd);
			$(".nav_list_body")[0].appendChild(nav_list_dl);
        }
	});
}

function initProductList(){
	var _div,_a,_dl,_dt,_dd,_p,_b1,_b2,_b3,_s,_span1,_span2,_span3,_strong1,_strong2,_em;
		
	$.post("json/production_list.json",null, function(data,textStatus){
		for(var i = 0; i < data["product"].length ; i++){
			_dl = document.createElement("dl");
			_div = document.createElement("div");
			_dd = document.createElement("dd");
			_b1 = document.createElement("b");
			_b2 = document.createElement("b");
			_b3 = document.createElement("b");
			_s = document.createElement("s");
			_p = document.createElement("p");
			_a = document.createElement("a");
			_a.href = "javascript:void(0)";
			_dt = document.createElement("dt");
			_img = document.createElement("img");
			_span1 = document.createElement("span");
			_span2 = document.createElement("span");
			_span3 = document.createElement("span");
			_strong1 = document.createElement("strong");
			_strong2 = document.createElement("strong");
			_strong3 = document.createElement("strong");
			_em = document.createElement("em");
			_em.innerHTML = "折";
			_strong1.innerHTML = data["product"][i]["discount"];
			_img.src = "images/"+data["product"][i]["url"];
			_img.alt = data["product"][i]["detail"];
			_dd.innerHTML = data["product"][i]["detail"];
			_b1.innerHTML = "$";
			_b2.innerHTML = "$";
			if(parseInt(data["product"][i]["price"])){
				_s.innerHTML =(data["product"][i]["price"]/(data["product"][i]["discount"]*0.1)).toFixed(2);
			}else{
				_s.innerHTML = null;
			}
			_strong2.innerHTML = data["product"][i]["price"];
			_b3.innerHTML = "(约￥";
			_strong3.innerHTML = (data["product"][i]["price"]*6.89).toFixed(2)+")";
			_span2.appendChild(_b2);
			_span2.appendChild(_strong2);
			_span3.appendChild(_b3);
			_span3.appendChild(_strong3);
			_p.appendChild(_b1);
			_p.appendChild(_s);
			_span1.appendChild(_strong1);
			_span1.appendChild(_em);
			_dt.appendChild(_img);
			_dt.appendChild(_span1);
			_a.appendChild(_dt);
			_a.appendChild(_dd);
			_a.appendChild(_p);
			_a.appendChild(_span2);
			_a.appendChild(_span3);
			_dl.appendChild(_div)
			_dl.appendChild(_a);
			$(".product_list")[0].appendChild(_dl);
		}
	});
}

function menuchoose(){
	$(".choose_menu_1 span").click(function(){
		for(var n = 0;n<$(".choose_menu_1 span").length;n++){
			$(".choose_menu_1 span")[n].className = null;
			$(".list"+(n+1)).css({"display": "none"});
		}
		
		$(this)[0].className = "choosed";
		$(".list"+($(this).index()+1)).css({"display": "block"});
	});

	$(".choose_menu_2 span").click(function(){
		for(var n = 0;n<$(".choose_menu_2 span").length;n++){
			$(".choose_menu_2 span")[n].className = null;
			$(".list2_"+(n+1)).css({"display": "none"});
		}
		$(this)[0].className = "choosed";
		$(".list2_"+($(this).index()+1)).css({"display": "block"});
	});

	$(".galler").click(function(){
		$(".product_list_1")[0].style.display = "none";
		$(".product_list_2")[0].style.display = "block";
		$(".galler").css({
			"backgroundColor":"#484a57"
		});
		$(".galler span").css({
			"width":"74px",
			"height":"55px",
			"marginTop":"9px",
			"backgroundPosition":"0 -74px"
		});
		$(".ak").css({
			"backgroundColor":"#f5f5f5"
		});
		$(".ak span").css({
			"backgroundPosition":"0 -37px"
		});
	});
	$(".ak").click(function(){
		$(".product_list_1")[0].style.display = "block";
		$(".product_list_2")[0].style.display = "none";
		$(".galler").css({
			"backgroundColor":"#f5f5f5"
		});
		$(".galler span").css({
			"backgroundPosition":"0 -140px"
		});
		$(".ak").css({
			"backgroundColor":"#484a57"
		});
		$(".ak span").css({
			"backgroundPosition":"0 0"
		});
	});

	for(var z=0;z<$(".trans>div dl").length;z++){
		$(".trans>div dl dd").get()[z].style.backgroundPosition = -110*z+"px 0";
	}
	
}
function initFooter(){
	$("#footer").load("footer.html",function(){
		console.log("success");
	});
}
$(function (){
	eventHandle();
	banner();
	initNavList();
	initProductList();
	banner2();
	menuchoose();
	initFooter();
});