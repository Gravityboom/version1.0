app.controller("kindController",["$scope","$location","$routeParams","$http","$httpParamSerializerJQLike",function($scope,$location,$routeParams,$http,$httpParamSerializerJQLike){
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
			$scope.isLoading = true;
      		var data = eval(response.data);
      		console.log(response);
	      	if(data == "0"){
	      		alert("暂未数据")
	      	}
	      	$scope.proList = data;
      })
	}
		$scope.httpRequest()
}]);