(function (){
    'use strict'
    
    var module = angular.module('NarrowItDownApp', []);
    module.controller('NarrowItDownController', NarrowItDownController);    
    module.service('MenuSearchService', MenuSearchService);
    module.directive('foundItemsDirective', FoundItemsDirective);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$http'];
    
    function NarrowItDownController (service) {
        var self = this;

        self.search = function(searchTerm) {            
            service.getMatchedMenuItemsPromise(searchTerm).then(function(result){
                self.items = result;    
            });            
        }        
    }
        
    function MenuSearchService ($http) {                
        var self = this;                
        
        self.getMatchedMenuItemsPromise = function(searchTerm) {
            var nameFilter = function(obj){                
                if(obj.name.indexOf(searchTerm) !== -1)                                     
                    return obj;                
                }          

         return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(response) {            
             return response.data.menu_items.filter(nameFilter);
            });                          
        }        
    }            
    
    function FoundItemsDirective(){
        var ddo = {
            scope: {
                foundItems: "<items",
                dirRemove: "&onRemove"
            },
            templateUrl: "../loader/itemsloaderindicator.template.html"
        }
        return ddo;
    }
    
})()