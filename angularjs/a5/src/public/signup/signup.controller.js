(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuItemsService'];

    function SignupController(MenuItemsService) {
        var ctrl = this;
        ctrl.user = {};
        ctrl.message = "";        

        ctrl.submit = function (menu_number) {
            MenuItemsService.getMenuItem(menu_number).then(function(response){
                if(response.message){                    
                    ctrl.message = response.message;
                }
                
                if(response.data){
                    ctrl.message = "Your information has been saved.";
                    ctrl.user.favorite = response.data;                    
                    MenuItemsService.cacheData(ctrl.user);
                }                    
            });
        }
    }
})();