1、angular是什么
	
2、优势
	依赖注入
	双向数据绑定
	测试
	控制器
	指令
	过滤器
	。。。。
3、入门案例
 	1）在需要的地方添加指令ng-app，初始化一个anagular的应用程序
 		标识的就是程序的一个入口，在它所包含的内部，如果符合angular的语法，那么就按照angular的语法解析
 		必不可少-------语法导致
 		也是唯一的------一个程序只有一个入口
 	2)不同的数据类型的展示
 	            基本的数据类型
 		引用类型
4、MVC思想
	M---model----数据-----module---模型
	V---view-----视图
	C---controller---连接视图和数据的
	
	写法：
		html节点添加ng-app="myApp"
		在js中
			var app = angular.module("myApp",[]);//和html ng-app = "myApp"一一对应，[] 指代的意思是我们后期需要注入的各个模块
		在body上添加了一个ng-controller="myCtrl"
		在js中
		    app.controller("myCtrl",function($scope){
//		    	$scope其实相当于我们的this,但是不能替换，我们变量、对象挂载到$scope上
		    	$scope.userName="zz1611";
		    })
		html中
			{{userName}}
		运行即可显示
		
		问题：1、一个页面只能有一个入口？------是的
			 2、一个页面可以有多个控制器吗？-----是的
				结合js中的作用域的概念去理解
5、ng-src
	一般图片展示
	$scope.src = "img/banner1.jpg"
	
	<img ng-src="{{src}}"/>
	
	src
		因为进行了两步操作：
		1.表达式直译，没做网络请求；
		2.再进行网络请求，然后显示图片；
		
		利用ng-src解决此问题
6、MVVM
	数据双向绑定
	输入框、select、textarea结合
	<input ng-model="userName"/>
	{{userName}}
	$scope.userName = "zz1611"
	
	数据驱动视图更新
7、ng-repeat
	循环
	user可以随便写，表示的是users一个对象，也就是数组当中每一个对象的实例  in  users不能更改
	<ul>
		<li ng-repeat="user in users">{{user.name}}</li>
	</ul>
	$scope.users=[{
		name:"wxx"
	},
	{
		name:"wxx01"
	}]
	

	循环的嵌套
		我们将每一个对象的中的一个属性作为其中另一个循环的原始数据model
		ng-repeat = "city in provice.cities"
		
		{{city.name}}
8、引入bootstrap进行结合使用
	bootstrap.css
	jquery.js
	bootstrap.min.js
	angular.js
9、ng-click
	angular中点击事件
	ng-click="addLikeNum(user)"
	
	$scope.addLikeNum = function(user){
		user.likeNum++;
	}
	
	此时更改的就是$scope.users里面的点击的那个数据，所以说数据改变了，视图我们也发生了改变

	如果我们要储存到本地，
	我们存储的可以死$scope.users
	localStrage.setItem("users",$scope.users);//注意格式转换
	
	取数据
	if(loacalStorage.getItem("users")){
		$scope.users = loacalStorage.getItem("users");
	}else{
		//ajax
		
		sucess:function(data){
			$scope.users = data
		}
	}
10、过滤器 filters

	过滤器可以写在表达式或者指令中
	1）、基本的过滤器 -----表达式
		uppercase：大写
		lowercase：小写
		currency:货币       {{ price | currency : "￥" }}
		date: 日期   {{ date | date : "yyyy-MM-dd"}}
		number：数值 {{salary|number:2}}-----保留两位有效数字
		。。。
	2）、limitTo:2 ---- 指令
		显示2条数据
		MVVM  select 结合 ----每页显示的条数----ng-model="selectNum"
		
		<tr ng-repeat="user in users | limitTo : selectNum"></tr>
	3)、代码中有orderby/filter
	4)、自定义过滤器
		{{gender|myFilter}}
		
		app.filter("myFilter",function(){
			return function(gender){//gender可以任意写
				//可以判断然后不同处理
				return **;
			}
		})
11、ng-show/ng-hide
	真真为真、真假为假，假真为假，假假为真
	变量  isShow 
	通过控制isShow为真还是为假进行显示隐藏
12、ng-init
	
13、ng-include
	ng-include="'text.html'"
14、根作用域 
	$rootScope --- 全局变量
	只有自己使用$scope，设计对方我们全部使用$rootScope(多方使用的才用)
15、$http
	$http({
        url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
        method: 'POST',
        data: $httpParamSerializerJQLike({
        	classID:classItem.classID,
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(response){
      	console.log(response.data)
      	var data = eval(response.data);
      	$scope.proList = data;
      })
16、结合bootstrap写样式
	div.container>div.col-xs-3+div.col-xs-9
	
	div.col-xs-3中
		列表
		<ul class="list-group">
		  <li class="list-group-item" ng-repeat = "classItem in classList" ng-click="goProList(classItem)">{{classItem.className}}</li>
		</ul>
		classList是由我们ajax请求过来的
		$http.get("http://datainfo.duapp.com/shopdata/getclass.php").then(function(response){
	//		console.log(response.data)
			$scope.classList = response.data
		});
		
		$scope.goProList = function(classItem){
			console.log(classItem.classID)
			$scope.classID = classItem.classID;
	
			 $http({
		        url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
		        method: 'POST',
		        data: $httpParamSerializerJQLike({
		        	classID:classItem.classID,
		        }),
		        headers: {
		          'Content-Type': 'application/x-www-form-urlencoded'
		        }
		      }).then(function(response){
	//	      	console.log(response.data)
		      	var data = eval(response.data);
		      	console.log(data);
		      	if(data == "0"){
		      		alert("暂未数据")
		      	}
		      	$scope.proList = data;
		      })
		}
17、排序
	价格排序
	折扣排序
	sort
	
	$scope.sortData = function(id){
		var arr = $scope.proList;
		console.log("arr",arr)
		arr.sort(function(a,b){
			if(id == 0){
				return a.price-b.price;
			}else if(id == 1){
				return b.price-a.price;
			}else if(id == 2){
				return a.discount-b.discount;
			}else if(id == 3){
				return b.discount-a.discount;
			}
			
		})
		$scope.proList = arr;
	}
18、分页
	上一页pageChange(0)
	下一页pageChange(1)
	页码$scope.pageCode
	每页显示多少个$scope.lineNumber
	$scope.pageChange = function(id){
		if(id == 0){
			//上一页操作，ajax
			$scope.httpRequest();
		}else if(id == 1){
			//下一页操作，ajax
			$scope.httpRequest();
		}
	}
	$scope.httpRequest()的核心思想
		$http({
	        url: "http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
	        method: 'POST',
	        data: $httpParamSerializerJQLike({
	        	pageCode:$scope.pageCode,//*****************************
	        	linenumber:$scope.lineNumber,//*****************************
	        }),
	        headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        }
	      }).then(function(response){
//	      	console.log(response.data)
	      	var data = eval(response.data);
	      	console.log(data);
	      	if(data == "0"){
	      		alert("暂未数据")
      		  	$scope.pageCode = $scope.pageCode-1;
	      	}
	    
	      	$scope.proList = data;
	      })