(function() {
  "use strict";
  angular.module("MenuApp")
  .component("itemList",{
    templateUrl:"src/template/item.template.html",
    controller:ItemComponentController,
    bindings:{
      items:"<"
    }
  });
  function ItemComponentController() {
    var $ctrl=this;
    console.log($ctrl.items);
  }
})();
