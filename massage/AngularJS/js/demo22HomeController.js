app.controller("homeController",["$scope","$location","$routeParams","$http","$httpParamSerializerJQLike","$timeout",function($scope,$location,$routeParams,$http,$httpParamSerializerJQLike,$timeout){
	$scope.test = "hha";
	$scope.loadTest = "正在加载";
	$scope.isLoading = false;
	$scope.goCart = function(){
		console.log("正在去");
		$timeout(function(){
			$location.path("/cart");
			console.log("ok");
		},300)
		
	}
	
	$scope.httpRequest = function(myData){
		$http({
	        url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
	        method: 'POST',
	        data: $httpParamSerializerJQLike(myData),
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        }
	      }).then(function(response){
	//	      	console.log(response.data)
				
				$scope.loadTest = "加载成功";
				$timeout(function(){
					console.log("ok");
					$scope.isLoading = true;
				},300)
	      		var data = eval(response.data);
	      		console.log(response);
		      	if(data == "0"){
		      		alert("暂未数据")
		      	}
		      	$scope.proList = data;
	      })
	}
		$scope.httpRequest()
	
	$scope.addCart = function(proItem ){
		$http({
	        url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
	        method: 'POST',
	        data: $httpParamSerializerJQLike({
	        	userID:"f66",
	        	goodsID:proItem.goodsID,
	        	number:1
	        }),
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        }
	      }).then(function(response){
	//	      	console.log(response.data)
				
				alert(1)
	      })
	}
	
	$scope.goDetail = function(proItem){
		$location.url("/detail?goodsID="+proItem.goodsID+"&type=home");
	}
}]);