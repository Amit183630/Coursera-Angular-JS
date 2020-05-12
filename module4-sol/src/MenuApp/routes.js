(function () {
  "use strict";
  angular.module("MenuApp")
  .config(RoutesCofig);
  RoutesCofig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesCofig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider.
    state("home",{
      url:"/home",
      templateUrl:"src/template/MenuApp.home.html"
    })
    .state("home.categories",{
      url:"/categories",
      templateUrl:"src/template/categories.html",
      controller:"CategoriesController as category",
      resolve:{
        items:['MenuDataService',function(MenuDataService){
          console.log(MenuDataService);
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state("home.items",{
      url:"/items/{shortName}",
      templateUrl:"src/template/items.html",
      controller:"ItemsController as item",
      resolve:{
        items:['MenuDataService','$stateParams',function (MenuDataService,$stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.shortName)
          .then(function(response){
            return response.data;
          });
        }]
      }
    });
  }
})();
