(function (){
    'use strict'    
    var module = angular.module('Data');
    module.service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    
    function MenuDataService($http){
        var self = this;
        
        self.getAllCategories = function(){
            return $http.get("https://davids-restaurant.herokuapp.com/categories.json").then(function(response) {
                 return response.data;
            });
        }
        
        self.getItemsForCategory = function(categoryShortName){
            return $http(
                {   url: "https://davids-restaurant.herokuapp.com/menu_items.json",
                    method: "GET",
                    params: {category: categoryShortName}
                }).then(function(response) {
                 return response.data;
            });
        }        
    }        
})()