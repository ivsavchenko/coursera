(function (){
    'use strict'    
    var module = angular.module('MenuApp');
    module.component('itemsList', {
        templateUrl: 'src/restaurant/templates/items-component.template.html',
        bindings: {
            items: '<'
        }
    });        
})();