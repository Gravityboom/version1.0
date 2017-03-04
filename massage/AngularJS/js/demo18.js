var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
	$scope.currentIndex = 0;
	$scope.tabClick = function(id){
		$scope.currentIndex = id;
	}
});
