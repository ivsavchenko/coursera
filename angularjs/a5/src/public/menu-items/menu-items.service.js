(function () {
    "use strict";

    angular.module('public')
        .service('MenuItemsService', MenuItemsService);

    MenuItemsService.$inject = ['$http'];

    function MenuItemsService($http) {
        var self = this;
        var filter;        
        var cache = null;
        
        self.getMenuItem = function (shortName) {
            return $http.get("https://warm-reef-62245.herokuapp.com/menu_items/"+ shortName +".json").then(function (success) {                
                return {data: success.data, message: null};
            }, function(error){
                return {data: null, message: "No such ('" + shortName + "') menu number exists"};                
            });
        }
        
        self.cacheData = function(data){
            cache = data;
            console.log(data);
        }        
        
        self.getCached = function(){
            return cache;
        }
    }
    
})();