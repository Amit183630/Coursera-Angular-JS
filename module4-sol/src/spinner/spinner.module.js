(function () {
'use strict';

angular.module('Spinner', [])
.config(function(){
  console.log("Spinner:config Mehtod is running");
})
.run(function(){
  console.log("Spinner:Run Mehtod is running");
});
})();
