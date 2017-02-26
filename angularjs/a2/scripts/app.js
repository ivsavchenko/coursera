(function (){
    'use strict'
    
    var module = angular.module('ShoppingListCheckOff', []);
    module.controller('ToBuyController', ToBuyController);
    module.controller('AlreadyBoughtController', AlreadyBoughtController);
    module.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController (service) {
        var self = this;
        self.items = service.getToBuyList();      
        self.hasAny = service.hasToBuyItems;
        
        self.buyItem = function(index){     
            service.buyItem(index);
        }    
    } 
    
    function AlreadyBoughtController (service) {
        var self = this;
        self.items = service.getBoughtList();
        self.hasAny = service.hasBoughtItems;
    }  
    
    function ShoppingListCheckOffService () {
        var self = this;
        var itemsToBuy = [{ name: "Apples", quantity: 10 }, 
                          { name: "Oranges", quantity: 20 },
                          { name: "Lemons", quantity: 30 },
                          { name: "Tunas", quantity: 40 },
                          { name: "Yogurts", quantity: 50 },
                          { name: "Beers", quantity: 60 }];
        var itemsBought = [];
        
        var checkIsAny = function(a) {
        }
        
        
        self.getToBuyList = function() {
            return itemsToBuy; 
        }
        
        self.getBoughtList = function() {
            return itemsBought; 
        }        
        
        self.buyItem = function (index) {
            var item = itemsToBuy[index];
            itemsBought.push(item);
            itemsToBuy.splice(index, 1);           
        }
        
        self.hasToBuyItems = function() { 
            return itemsToBuy.length != 0
        }
        
        self.hasBoughtItems = function() { 
            return itemsBought.length != 0
        }        
    }        
})()