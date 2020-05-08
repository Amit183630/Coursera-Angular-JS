(function(){
  "use strict";
  angular.module("NarrowItDownApp",[])
  .controller("NarrowItDownController",NarrowItDownController)
  .service("MenuSearchService",MenuSearchService)
  .constant("address","https://davids-restaurant.herokuapp.com")
  .directive("foundItems",foundItems);
  function foundItems() {
    var ddo={
      templateUrl:'FoundItems.html',
      scope:{
        foundItem:"<",
        onRemove:"&"
      }
    };
    return ddo;
  }
  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow=this;
    narrow.search="";
    narrow.foundItems="";

    narrow.narrowIt=function(){
      narrow.foundItems=MenuSearchService.getMatchedMenuItem(narrow.search);
      console.log(narrow.foundItems);

    }
    narrow.removeItem=function(index){
      MenuSearchService.removeItem(index);

    }
  }
  MenuSearchService.$inject=['$http','address'];
  function MenuSearchService($http,address) {
    var service=this;
    service.menuItems=[];
    service.foundItems=[];
    service.sendRequest=function(){
      var response=$http({
        url:(address+'/menu_items.json')
      });
      return response;
    }
    service.getMatchedMenuItem=function(search){
      var promise=service.sendRequest();
      promise.then(function(response){
        service.menuItems=response.data.menu_items;

        var searchVal=search.toLowerCase();
        searchVal=searchVal||null;
        for(var i=0;i<service.menuItems.length;i++){
          var descVal=service.menuItems[i].description.toLowerCase();
          if(descVal.indexOf(searchVal)!==-1){
            service.foundItems.push(service.menuItems[i]);
          }
        }
      })
      .catch(function(error){
        console.log(error);
      });
      return service.foundItems;
    }
    service.removeItem=function(index){
      service.foundItems.splice(index,1);
    }
  }
})();
