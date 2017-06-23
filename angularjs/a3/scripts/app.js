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
        self.items = [];
        
        self.search = function() {            
            service.getMatchedMenuItemsPromise(self.searchTerm).then(function(result){
                self.items = result;    
            });            
        }        
    }
        
    function MenuSearchService ($http) {                
        var self = this;
        
        self.getMatchedMenuItemsPromise = function(searchTerm) {
         return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(response) {
             console.log(searchTerm);   
             return response.data;
            });  
            
          /*  var nameFilter = function(obj){
                return obj.name.indexOf()
            }*/            
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