  angular.module('myApp').controller('profileController', ['$scope', '$log','$http', '$window',function ($scope, $log,$http,$window) {

    $scope.name = 'Profile';
    $scope.fName = 'test';
    $scope.reminders='';


    $scope.loadData = function () {

        $http.get('/api/user').success(function (data, status, headers, config) {
            console.log(data);
            console.log("Success::" + status);
            $scope.fName=data.name;
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $window.location.href = '/#/login'
            console.log("Error::" + status);
        });


    };

    $scope.getReminders=function(){
         $http.get('/api/reminder').success(function (data, status, headers, config) {
            console.log(data);
            console.log("Success::" + status);
            $scope.reminders=data;
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
           // $window.location.href = '/#/login'
            console.log("Error::" + status);
        });
    }


}]);