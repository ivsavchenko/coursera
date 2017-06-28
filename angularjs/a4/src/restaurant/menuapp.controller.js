(function (){
    'use strict'    
    var module = angular.module('MenuApp');    
    module.controller("MenuAppController", MenuAppController);
    
    MenuAppController.$inject = ['categories'];
    
    function MenuAppController(categories){
        var self = this;
        self.categories = categories;     
    }    
})();