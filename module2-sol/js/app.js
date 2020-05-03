(function(){
  "use strict";
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",toBuy)
  .controller("AlreadyBoughtController",alreadyBought)
  .service("ShoppingListCheckOffService",checkOff);
  toBuy.$inject=['ShoppingListCheckOffService'];
  alreadyBought.$inject=['ShoppingListCheckOffService'];
  function toBuy(ShoppingList){
    var ToBuy=this;
    ToBuy.BuyItems=ShoppingList.getToBuyItems();
    ToBuy.emptyMessage=ToBuy.BuyItems.length;
    ToBuy.moveToBought=function(index){
      var item=ToBuy.BuyItems.splice(index,1)[0];
      ShoppingList.moveToBought(item);
      ToBuy.emptyMessage=ToBuy.BuyItems.length;
    }
  }
  function alreadyBought(ShoppingList){
    var AlreadyBought=this;
    AlreadyBought.boughtItems=ShoppingList.getBoughtItems();
    AlreadyBought.showMessage=function(){
      AlreadyBought.emptyMessage=AlreadyBought.boughtItems.length;
      return AlreadyBought.emptyMessage;
    }



  }
  function checkOff(){
    var service=this;
    service.emptyMessage;
    service.toBuyItems=[
      {
        name:"Cookies",
        quantity:20
      },
      {
        name:"IceCream",
        quantity:10
      },
      {
        name:"Burger",
        quantity:10
      },
      {
        name:"Momo",
        quantity:15
      },
      {
        name:"Soda",
        quantity:5
      },
    ];
    service.boughtItems=[];
    service.getToBuyItems=function(){
      return service.toBuyItems;
    }
    service.getBoughtItems=function(){
      return service.boughtItems;
    }
    service.moveToBought=function(item){
      service.boughtItems.push(item)
    }
  }
})();
