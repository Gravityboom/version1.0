
app.config(["$routeProvider",function($routeProvider){
	$routeProvider
				.when("/home",{
					templateUrl:"tpls/demo22home.html",
					controller:"homeController"
				})
				.when("/kind",{
					templateUrl:"tpls/demo22kind.html",
					controller:"kindController"
				})
				.when("/cart",{
					templateUrl:"tpls/demo22cart.html",
					controller:"cartController"
				})
				.when("/user",{
					templateUrl:"tpls/demo22user.html",
					controller:"userController"
				})
				.when("/more",{
					templateUrl:"tpls/demo22more.html",
					controller:"moreController"
				})
				.when("/detail",{
					templateUrl:"tpls/demo22detail.html",
					controller:"detailController"
				})
				.otherwise({
			        redirectTo: '/home'
			      });
				
}]);