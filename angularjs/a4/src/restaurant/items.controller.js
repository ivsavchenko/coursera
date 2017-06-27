(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("ItemsController", ItemsController);
    
    ItemsController.$inject = ['MenuDataService', '$stateParams', 'items'];
    
    function ItemsController(service, $stateParams, items){        
        var self = this;            
        self.items = items;     
    }
})();