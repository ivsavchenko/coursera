(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("MenuAppController", MenuAppController);
    
    MenuAppController.$inject = ['MenuDataService'];
    
    function MenuAppController(service){
        var self = this;
        
        service.getAllCategories().then(function(response){
            self.items = response;
        })        
    }
    
})()