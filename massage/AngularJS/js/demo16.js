var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
	var users = [{
		"firstName": "FanG",
		"lastName": "vane",
		"gender": "1",
		"likeNum": 0,
		"unLikeNum": 0,
		"salary": 10000,
		"birthday": new Date('1998-01-01')
	}, {
		"firstName": "Sara",
		"lastName": "rose",
		"gender": "2",
		"likeNum": 0,
		"unLikeNum": 0,
		"salary": 20000,
		"birthday": new Date('1998-01-01')
	}, {
		"firstName": "Mark",
		"lastName": "bear",
		"gender": "1",
		"likeNum": 0,
		"unLikeNum": 0,
		"salary": 30000,
		"birthday": new Date('1998-01-01')
	}, {
		"firstName": "Pam",
		"lastName": "hot",
		"gender": "2",
		"likeNum": 0,
		"unLikeNum": 0,
		"salary": 40000,
		"birthday": new Date('1998-01-01')
	}, {
		"firstName": "Wang",
		"lastName": "lao",
		"gender": "1",
		"likeNum": 0,
		"unLikeNum": 0,
		"salary": 1000,
		"birthday": new Date('1998-01-01')
	}];
	$scope.users = users;
	var len = users.length;
	//			$scope.maxpageCode = Math.ceil(len/$scope.selectNum);
	$scope.selectNum = 6;
	$scope.pageCode = 1;
	$scope.countLikeNum = function(user, id) {
		user.likeNum++;
		console.log($scope.users);
	}
	$scope.countUnLikeNum = function(user, id) {
		user.unLikeNum++;
	}
	$scope.isShow = true;
	$scope.sortStr = "firstName";
	$scope.reverseData = false; //默认不能反向
	$scope.sortData = function(str) {
		//orderBy:'name'表示按照正序排列，如果是"-name"，就是倒叙排列
		//orderBy:'name'：reverseData   reverseData为true即正序，反之则倒叙
		//每一列都有自己的正序或者倒叙规则
		//先判断是不是自己，如果是自己，若为真，按照自己的变为自己的反向，其余列都为false
		$scope.reverseData = ($scope.sortStr == str) ? !$scope.reverseData : "false";
		//按照哪一个字段进行排序
		$scope.sortStr = str;
	}


	//点击下一页的时候让显示暂无数据
	$scope.nextPage = function(pageCode){
		$scope.isShow = !$scope.isShow;
	}
	$scope.prevPage = function(pageCode){
		$scope.isShow = !$scope.isShow;
		$scope.users = users;
	}
	$scope.getClass = function(str) {
		if($scope.sortStr == str) {
			return $scope.reverseData ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down"
		}
		//				else{
		//					return "glyphicon glyphicon-chevron-down";
		//				}
	}
});
app.filter("genderFilter", function() {
	return function(gender1){
		switch (gender1){
			case "1":
				return "男";
				break;
			case "2":
				return "女";
				break;
			case "3":
				return "未知";
				break;
			default:
				break;
		}
	}
});