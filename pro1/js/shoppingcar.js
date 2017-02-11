function initFooter(){
    $("#footer").load("footer2.html");
}

$(function(){
	initFooter();
});


function fn($scope,$http){
    /*$scope.cartList=[
     {
     id:0,
     image:"images/1.jpg",
     name:"[MILLET][男] 长款羽绒服 (MVLWD406)",
     description:null,
     rmbPrice:362.04,
     dollar:52.93,
     num:1,
     check:false,
     src:"1.jpg"
     },
     {
     id:1,
     image:"images/2.jpg",
     name:"[官方直营]伊思IT`S SKIN晶钻蜗牛安瓶(~2/15特价)",
     description:null,
     rmbPrice:211.01,
     dollar:30.85,
     num:1,
     check:false,
     src:"2.jpg"
     },
     {
     id:2,
     image:"images/4.jpg",
     name:"[官方直营]兰芝 新水酷双重保湿精油50ml",
     description:null,
     rmbPrice:147.74,
     dollar:21.60,
     num:1,
     check:false,
     src:"3.jpg"
     }];*/
    $scope.cartList = [];
    $scope.quantityArr = [];
    $scope.getCookieArr = [];

    $scope.checkAllValue = false;
    $scope.rmbSumPrice = 0;
    $scope.dollarSumPrice = 0;
    //读取cookie后  ajax请求数据
    $http.post("demo.json",null).then(function(data,stasus,headers,config){
        //console.log(data.data);
        var _reg = /production\d+/g;
        var _regId = /id:\d+/g;
        var _regNum = /num:\d+/g;
        var getCookieArr = document.cookie.match(_reg);
        var getCookieArr2 = document.cookie.match(_regId);
        var getCookieNum = document.cookie.match(_regNum);
        $scope.getCookieArr = getCookieArr;
        $scope.getCookieArr2 = getCookieArr2;
        $scope.getCookieNum = getCookieNum;
        var idValue = [];
        var numValue = [];
        for(var i = 0 ;i<getCookieArr.length;i++) {
            idValue.push(getCookieArr2[i].replace("id:", ""));
            numValue.push(getCookieNum[i].replace("num:",""));
            $scope.quantityArr.push(1);
            for(var j = 0; j<data.data.length;j++){
                if (idValue[i] == data.data[j]["id"]){
                    //console.log(data.data[i]);
                    $scope.quantityArr[i] = numValue[i];
                    console.log($scope.quantityArr)
                    $scope.cartList.push(data.data[j]);
                }
            }
        }
        console.log($scope.quantityArr);
    }).catch(function(data,status,headers,config){
        console.log("error");
    });

    //计算商品价格函数
    $scope.priceCal = function(){
        $scope.rmbPrice = 0;
        $scope.dollarPrice = 0;

        for(var i=0,length=$scope.cartList.length; i<length ; i++){
            if($scope.cartList[i].check){
                //console.log($scope.cartList[i].rmbPrice);
                $scope.rmbPrice += $scope.cartList[i].rmbPrice;
                $scope.dollarPrice +=$scope.cartList[i].dollar;
            }
        }
    };

    //checkbox框全选功能
    $scope.checkAll = function(){
        for(var i in $scope.cartList){
            $scope.cartList[i].check = $scope.checkAllValue;
        }
        $scope.priceCal();
    };
    $scope.checkIt = function(){
        //console.log($scope.cartList[getIndex].check);
        /*for(var j in $scope.cartList){
         if($scope.cartList[j].check==false){
         $scope.checkAllValue = false;
         }
         break;
         }*/
        $scope.priceCal();
    };

    $scope.writeCookie = function(getIndex){
        document.cookie = $scope.getCookieArr[getIndex]+"={id:"+ $scope.getCookieArr2[getIndex].replace("production","") + ",num:" + $scope.quantityArr[getIndex] + "}";
        console.log(document.cookie);
    }

    //计算商品数量
    $scope.countNum = function(para,index){
        var tempt = parseInt($scope.quantityArr[index]);
        if(para){
            tempt += 1;
            $scope.quantityArr[index] = tempt;
            $scope.writeCookie(index);

        }else{
            if(tempt>1){
                tempt -= 1;
                $scope.quantityArr[index] = tempt;
                console.log($scope.quantityArr);
                $scope.writeCookie(index);
            }
            //console.log(document.cookie);
        }
        //$scope.quantity
    }
}

var _app = angular.module("myApp",[]);
_app.controller("cartCtrl",fn);