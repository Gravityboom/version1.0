function initFooter(){
    $("#footer").load("footer2.html",function(){
        console.log("success");
    });
}

function carCheck(){
	var flag;
	$(".check_all")[0].onclick = function(){
		for(var j=0;j<$(".check_it").length;j++){
			$(".check_it")[j].checked = this.checked;
		}
		if($(".check_all")[0].checked!=$(".check_all")[1].checked){
			$(".check_all")[1].checked=$(".check_all")[0].checked
		}
		calPrice();
	}

	$(".check_all")[1].onclick = function(){
		for(var j=0;j<$(".check_it").length;j++){
			$(".check_it")[j].checked = this.checked;
		}
		if($(".check_all")[0].checked!=$(".check_all")[1].checked){
			$(".check_all")[0].checked=$(".check_all")[1].checked
		}
		calPrice();
	}

	$(".check_it").click(function(){
		for(var a = 0 ; a < $(".check_it").length ; a++){
			if($(".check_it")[a].checked == false){
				flag = 0;
				break;
			}
			if($(".check_it")[a].checked == true){
				flag = 1;
			}
		}
		if(flag==1){
			$(".check_all")[0].checked = true;
			$(".check_all")[1].checked = true;
		}
		if(flag==0){
			$(".check_all")[0].checked = false;
			$(".check_all")[1].checked = false;
		}
		calPrice();
	});
}

function calPrice(){
	var a,b;
	var dollar_price = 0;
	var rmb_price = 0;
	for(var v = 0 ; v<$(".check_it").length ; v++){
		if($(".check_it")[v].checked == true){
			a = $(".check_it").eq(v).parent().siblings(".price_infact").children("strong").html();
			a = Number(a.replace(/<b>\$<\/b>/,""));
			dollar_price += a;
			b = $(".check_it").eq(v).parent().siblings(".price_infact").children("p").children("span").html();
			b = Number(b);
			rmb_price += b;
		}
	}
	dollar_price = dollar_price.toFixed(2);
	rmb_price = rmb_price.toFixed(2)
	showPrice(dollar_price,rmb_price);
}
function showPrice(p1,p2){
	var _p ;
	console.log(p1);
	$(".p1").html(p1);
	$(".origin .rmb_value").html(p2);
	if(parseInt(p1)==0){
		$(".p1").html(0);
		$(".origin .rmb_value").html(0);
	}
	_p = Number($(".p1").html())+Number($(".p2").html())+Number($(".p3").html());
	_p = _p.toFixed(2);
	console.log(_p);
	$(".p4").html(_p);
}
function deleteAll(){
	$(".delete_all").click(function(){
		var flag = confirm("确定删除购物车中所选的商品吗？");
		if(flag){
			$(".shop_product_list").remove()
		}
	});
}
function Handle(){
	carCheck();
	deleteAll();
}

$(function(){
	Handle();
	initFooter();
});