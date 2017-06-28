(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("ItemsController", ItemsController);
    
    ItemsController.$inject = ['$stateParams', 'items'];
    
    function ItemsController($stateParams, items){        
        var self = this;            
        self.items = items;     
    }
})();