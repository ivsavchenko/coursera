(function (){
    'use strict'    
    var module = angular.module('MenuApp');
    module.component('categoriesList', {
        templateUrl: 'src/restaurant/templates/categories-component.template.html',
        bindings: {
            items: '<'
        }
    });        
})();