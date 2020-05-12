(function() {
  "use strict";
  angular.module("MenuApp")
  .component("listCategories",{
    templateUrl:"src/template/categories.template.html",
    controller:CategoriesComponentController,
    bindings:{
      items:"<"
    }
  });
  function CategoriesComponentController() {
    var $ctrl=this;
  }
})();
