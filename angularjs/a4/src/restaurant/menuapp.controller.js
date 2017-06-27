(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("MenuAppController", MenuAppController);
    
    MenuAppController.$inject = ['MenuDataService', 'categories'];
    
    function MenuAppController(service, categories){
        var self = this;
        self.categories = categories;              
    }    
})();