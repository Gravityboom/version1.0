

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

	$("#web_mark")[0].onclick = markWeb;
	$("#street11")[0].onmouseover = showMystreet;
	$("#street11")[0].onmouseout = hiddenMystreet;
	$("#language_container")[0].onmouseover = showMystreet;
	$("#language_container")[0].onmouseout = hiddenMystreet;
	$("#nav_btn")[0].onclick = openNav;
	$("#nav_btn_close")[0].onclick = closeNav;
	$("#nav_btn_close2")[0].onclick = closeNav;

	$(window).scroll(function(){
		if($("body").scrollTop()>$(".nav_main_container").offset().top){
			$(".nav_main_container")[0].style.position = "fixed";
			$(".nav_main_container")[0].style.top = "0";
			$(".nav_cart")[0].style.display = "inline-block";
			$(".home_web")[0].style.display = "block";
		}
		if($("body").scrollTop()<=218){
			$(".nav_main_container")[0].style.position = "relative";
			$(".home_web")[0].style.display = "none";
			$(".nav_cart")[0].style.display = "none";
		}
	});
}

function initNavList(){
	$.post("json/nav_list.json?flag="+Math.random()*100, null, function(data,textStatus) {
		//console.log(data["list1"][0]["list2"].length);按照二级标题长度创建元素
		var nav_list_dl = null;
		var nav_list_dt = null;
		var nav_list_dd = null;
		var _strong = null;
		var nav_list_ul = null;
		var nav_list_li = null;
		var nav_list_div = null;
		var _strong2 = null;
		for(var z = 0; z < 3;z++){
			nav_list_dl = document.createElement("dl");
			nav_list_dt = document.createElement("dt");
			nav_list_dd = document.createElement("dd");
			nav_list_ul = document.createElement("ul");
			_strong = document.createElement("strong");
			_strong.innerHTML = data["list1"][z]["name"];

			for(var i = 0; i < data["list1"][z]["list2"].length;i++){
				nav_list_dt.appendChild(_strong);
				nav_list_li = document.createElement("li");
				_strong2 = document.createElement("strong");
				_strong2.innerHTML = data["list1"][z]["list2"][i]["name"];
				nav_list_div = document.createElement("div");

				for(var j = 0; j < data["list1"][z]["list2"][i]["list3"].length ;j++){
					nav_list_a = document.createElement("a");
					nav_list_a.innerHTML = data["list1"][z]["list2"][i]["list3"][j];
					nav_list_div.appendChild(nav_list_a);
				}
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

$(function (){
	eventHandle();
	initNavList();
});