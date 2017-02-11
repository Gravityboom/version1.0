function initFooter(){
    $("#footer").load("footer2.html",function(){
        console.log("success");
    });
}

var random = 0;
var a = 0,b = 0,c = 0;
function sendMessageCode(){
	random = parseInt(Math.random()*899999+100000);
	console.log(random);
}

function register(){
	var self_1 = this;
	this.reg = {
		"mail":/^\w+@([a-z0-9-]+\.)+[a-z]+$/gi,
		"password":/^.{6,14}$/g
	}
	this.mail = document.getElementById("register_email");
	this.password = document.getElementById("register_password");
	this.repassword = document.getElementById("register_rePassword");
	this.mobile = document.getElementById("phone_number");
	this.message_code = document.getElementById("message_code");
	this.mail.onblur = function(){
		var _self = this;
		if(self_1.reg.mail.test(_self.value)){
			$.post('api/checkUser.php', {"condition":"mail='"+_self.value+"'"}, function(data, textStatus) {
				console.log(data);
				if(parseInt(data)>=1){
					$(_self).next("em").html("已注册账号");
				}else{
					a=1;
					$(_self).next("em").html(null);
				}
			});
		}
		else{
			$(_self).next("em").html("无法使用的账号。");
		}
		if(self_1.mail.value==""){
			$(_self).next("em").html("请输入邮箱地址。");
		}
		self_1.reg.mail.lastIndex=0;
	}
	this.password.onblur = function(){
		var _self = this;
		if(self_1.reg.password.test(_self.value)){
			$(_self).next("em").html(null);
		}else{
			$(_self).next("em").html("需英文大/小写字母，数字或特殊文字( - , _ , . , ! , +, ‘, @)的组合。");
		}
		if(self_1.password.value == ""){
			$(_self).next("em").html("需6~20个字符组成的密码。");
		}
		self_1.reg.password.lastIndex=0;
	}
	this.repassword.onblur = function(){
		var _self = this;
		if(self_1.password.value == self_1.repassword.value && self_1.reg.password.test(self_1.repassword.value)){
			b=1;
			$(_self).next("em").html(null);
		}else{
			$(_self).next("em").html("密码不一致。");
		}
		self_1.reg.password.lastIndex=0;
	}
	this.message_code.onblur = function (){
		var _self = this;
		if(parseInt(_self.value) == random){
			console.log("yes");
			c = 1;
		}else{
			console.log("no");
		}
	}
}

function eventHandle(){
	$("#readit").change(function(){
		console.log(10);
		if($("#readit")[0].checked){
			$(".agree em")[0].style.display = "none";
		}else{
			$(".agree em")[0].style.display = "block";
		}
	});
}

function checkRegister(){
	if(a&&b&&c){
		$.post("api/registerUser.php",{"mobile":$("#phone_number").val(),"user":$("#register_email").val(),"secret":$("#register_password").val()}, function(data, textStatus) {
			console.log(data);
			alert("注册完成")
		});
	}else{
		alert("请完善信息!");
	}
}
$(function (){
    initFooter();
    register();
    eventHandle();
});
