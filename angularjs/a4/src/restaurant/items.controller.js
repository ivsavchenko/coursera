(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("ItemsController", ItemsController);
    
    ItemsController.$inject = ['MenuDataService', 'items'];
    
    function ItemsController(service, items){
        var self = this;            
        self.items = items;              
    }    
})();