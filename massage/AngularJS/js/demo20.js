var app = angular.module("myApp", []);
//app.controller("myCtrl", function($scope,$http) {
//	
//});
app.controller("myCtrl",["$scope","$http",function($scope,$http){
	$scope.test = "ceshi";
	
//	$http.get("data/demo20.json").then(function(data){
//		console.log(data.data)
//		$scope.test = data.data;
//	});
	$http({
		method:"get",
		url:"data/demo20.json"
	}).then(function(response){
		$scope.users = response.data;
	},function(response){
		console.log("error")
	});
	
//	$http({
//		method:"get/post",
//		url:"",
//		data:{
//			
//		}
//	}).then(function(){},function());
}]);

