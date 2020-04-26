(function(){
  "use strict";
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",checkItems);
  checkItems.$inject=['$scope'];
  function checkItems($scope){
    $scope.lunchMenu="";
    $scope.message="";
    $scope.msgStyle={};
    $scope.inputStyle={};
    $scope.check=function(){
      var items=$scope.lunchMenu.split(",");
      var i,count=0;
      items=items.filter(function(el){return el!="";});
      console.log("Length:"+items.length);
     if(items.length==0){
       $scope.msgStyle={"color":"red"};
       $scope.inputStyle={"border-color":"red"};
        $scope.message="Please enter data first";
      }
      else if(items.length<=3){
        $scope.inputStyle={"border-color":"green"};
        $scope.msgStyle={"color":"green"};
        $scope.message="Enjoy!";
      }
      else if (items.length>3) {
        $scope.inputStyle={"border-color":"green"};
        $scope.msgStyle={"color":"green"};
        $scope.message="Too much!";
      }
    }
    }
})();
