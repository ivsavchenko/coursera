(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuItemsService'];
    
function SignupController(MenuItemsService) {
    var $ctrl = this;  
    $ctrl.user = {};
    
    $ctrl.submit = function(){
        MenuItemsService.getAllCategories();        
    }        
}

})();
