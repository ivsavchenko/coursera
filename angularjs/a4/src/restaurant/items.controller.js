(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("ItemsController", ItemsController);
    
    ItemsController.$inject = ['MenuDataService', '$stateParams', 'items'];
    
    function ItemsController(service, $stateParams, items){        
        var self = this;            
        self.items = items;
        //var item = items[$stateParams.categoryShortName];
        //self.name = "123";//item.name;
        //self.quantity = item.quantity;
        //self.description = item.description;        
    }
})();