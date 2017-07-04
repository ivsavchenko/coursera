(function () {
"use strict";

angular.module('public')
.service('MenuItemsService', MenuItemsService);

MenuItemsService.$inject = ['$http'];    
    
function MenuItemsService($http) {
        var self = this;     
        var filter;
        var filterByName = function(obj){             
            if(obj.description.toLowerCase().indexOf(filter) !== -1)
                return obj;        
        }
        
        self.getAllCategories = function(){
            return $http.get("https://davids-restaurant.herokuapp.com/categories.json").then(function(response) {
                 return response.data;
            });
        }     
}
    

})();
