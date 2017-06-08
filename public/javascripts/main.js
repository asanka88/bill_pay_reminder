var myApp = angular.module('myApp', ['ngRoute']);


myApp.controller('landingController', ['$scope', '$log', '$http', '$window', function ($scope, $log, $http, $window) {

    $scope.name = 'Landing';
     

}]);

myApp.directive("reminderElement",function(){
    return {
        templateUrl:'directives/reminderElement.html',
        restrict:"AE",
        replace:true,
        scope:{
            reminderObject: "="
        }
    }
});