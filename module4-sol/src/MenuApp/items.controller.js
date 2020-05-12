(function () {
  "use strict";
  angular.module("MenuApp")
  .controller("ItemsController",ItemsController);
  ItemsController.$inject=['items'];
  function ItemsController(items) {
    var item=this;
    item.items=items.menu_items;
  }
})();
