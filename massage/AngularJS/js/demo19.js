var app = angular.module("myApp", []);
var baseUrl = "tpls/demo19";
app.controller("myCtrl", function($scope,$rootScope) {
	
	$rootScope.itemUrl = baseUrl+"home.html";
	
	
	
	
	
});


app.controller("leftCtrl",function($scope,$rootScope){
	$scope.items=[
		{
			'title':'首页',
			'type':'home'
		},
		{
			'title':'分类',
			'type':'kind'
		},
		{
			'title':'购物车',
			'type':'cart'
		},
		{
			'title':'我的',
			'type':'user'
		},
		{
			'title':'更多',
			'type':'more'
		}
			
	];
	$rootScope.currentIndex = 0;
	$scope.changeItem = function(type,id){
		console.log(type)
		$rootScope.itemUrl = baseUrl+type+".html";
		$rootScope.currentIndex = id;
	}
})
app.controller("rightCtrl",function($scope,$rootScope){
	$scope.toCart = function(){
		$rootScope.itemUrl = baseUrl+"cart.html";
//		$rootScope.itemUrl = $scope.itemUrl;
		$rootScope.currentIndex = 2;
	}
})