/**
 * Created by Administrator on 2017/2/6.
 */
<!--第二步：ng-controller 是angular控制器指令-->
<div ng-controller="firstController">
    <!--下面一行代码就是视图层-->
    <p>{{greeting.text}}, Angular</p>
</div>
</body>
<script src="libs/angular.min.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
var _app=angular.module("AngularApp",[]);
// module:是angular中重要的模块组织方式，
// 它提供了将一组内聚的组件（controller,service,filter,directive...)
// 封装在一起的能力。
// angular模块的入口
_app.controller("firstController",function($scope){
    //初始化控制器
    console.log(typeof $scope);//object 引用类型传递参数，形参改变实参也会改变
    $scope.greeting={
        "text":"Hello"
    }//Model
    console.log(_app);
});
//控制器的使用

//    写法总结：
//    html节点添加ng-app="myApp"
//    在js中
//    var app = angular.module("myApp",[]);//和html ng-app = "myApp"一一对应，[] 指代的意思是我们后期需要注入的各个模块
//    在body上添加了一个ng-controller="myCtrl"
//    在js中
//    app.controller("myCtrl",function($scope){
//		    	$scope其实相当于我们的this,但是不能替换，我们变量、对象挂载到$scope上
//        $scope.userName="zz1611";
//    })
//    html中
//    {{userName}}
//    运行即可显示
//
//    问题：1、一个页面只能有一个入口？------是的
//    2、一个页面可以有多个控制器吗？-----是的
//    结合js中的作用域的概念去理解
