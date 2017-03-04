app.filter("discountFilter",function(){
	return function(discount){
		if(discount == "0"){
			return "不打"
		}else{
			return discount;
		}
	}
});
