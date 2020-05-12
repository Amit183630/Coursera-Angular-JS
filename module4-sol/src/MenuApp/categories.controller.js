(function () {
  "use strict";
  angular.module("MenuApp")
  .controller("CategoriesController",CategoriesController);
  CategoriesController.$inject=['items'];
  function CategoriesController(items) {
    var category=this;
    category.item=items.data;
    console.log(category.item);
  }
})();
