function initFooter(){
    $("#footer").load("footer2.html",function(){
        console.log("success");
    });
}

function carCheck(){
	var flag = 0;
	$("#check_all")[0].onclick = function(){
		for(var j=0;j<$(".check_it").length;j++){
			$(".check_it")[j].checked = this.checked;
		}
		calPrice();
	}
	$(".check_it").click(function(){
		if(this.checked == false){
			$("#check_all")[0].checked = false;
		}
		/*for(var a=0;a<$(".check_it").length;a++){
			flag++;
			console.log(flag);
		}*/
		console.log($(".check_it").prop("checked"));
	});
}


function Handle(){
	carCheck();
}

$(function(){
	Handle();
	initFooter();
});