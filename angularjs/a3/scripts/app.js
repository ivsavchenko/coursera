(function (){
    'use strict'
    
    var module = angular.module('NarrowItDownApp', []);
    module.controller('NarrowItDownController', NarrowItDownController);    
    module.service('MenuSearchService', MenuSearchService);
    module.directive('foundItems', FoundItemsDirective);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    MenuSearchService.$inject = ['$http'];
    
    function NarrowItDownController (service) {
        var self = this;

        self.search = function(searchTerm) {            
            service.getMatchedMenuItems(searchTerm).then(function(result){
                self.found = result;    
            });            
        }   
        
        self.remove = function(index) {     
            self.found.splice(index, 1)
        }        
    }
        
    function MenuSearchService ($http) {                
        var self = this;     
        var filter;
        var filterByName = function(obj){             
            if(obj.name.indexOf(filter) !== -1)
                return obj;        
        }
        
        self.getMatchedMenuItems = function(searchTerm) {
            filter = searchTerm;
            return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(response) {
                 return response.data.menu_items.filter(filterByName);
                });                          
        }        
    }            
    
    function FoundItemsDirective(){
        var ddo = {
            restrict: "E",
            scope: {
                items: "<foundItems",
                remove: "&onRemove"
            },
            templateUrl: "loader/itemsloaderindicator.template.html"
        }
        return ddo;
    }
    
})()