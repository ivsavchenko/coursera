(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuItemsService'];    
    
function InfoController(MenuItemsService) {
    var ctrl = this;  
    ctrl.registrationInfo = MenuItemsService.getCached();        
}

})();
