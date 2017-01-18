function login(){
	//console.log($("#submit")[0]);
	$("#submit").click(function(){
		if($("#user")[0].value == "" || $("#password")[0].value == ""){
			$(".error_tip")[0].style.display = "block";
			$(".error_tip_content")[0].innerHTML = "请输入账号或密码";
			return false;
		}else{
			var _user = $("#user").val();
			var _password = $("#password").val();
			var _params = {
				"user": _user,
				"password": _password
			};

			$.post("api/login.php",_params,function(data,textStatus){
				try{
					if(data=="0"){
						window.location.href = "login.html?user=";
					}else{
						window.location.href = "11street.html?user="+data;
					}
				}catch(e){
					console.log("账号或密码输入错误");
				}
			});
		}
	});
}


function errorTip(){
	if(window.location.href.indexOf("user=")>0){
		var _url = window.location.href.match(/user=/g)[0].replace(/user=/g,"");
		console.log(_url);
		$(".error_tip")[0].style.display = "block";
		$(".error_tip_content")[0].innerHTML = "账号或密码输入错误";
	}
}

$(function (){
	login();
	errorTip();
});
