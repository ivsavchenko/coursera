(function (){
    var module = angular.module('a1', []);
    module.controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController ($scope) {
        var t = $scope.dishes;
        
        $scope.checkIsTooMuch = function() 
        {
            if(!$scope.dishes) {
                $scope.message = 'Please enter data first'; 
                return;
            }      

            var splitted = $scope.dishes.split(',');
            if(splitted.length > 3) {
                $scope.message = 'Too much!';
            } else {
                $scope.message = 'Enjoy!';
            }               
        };       
    } 
})()