  angular.module('myApp').controller('logoutController', ['$scope', '$log','$http', '$window',function ($scope, $log,$http,$window) {

    $scope.name = 'Profile';
    $scope.fName = 'test';


    $scope.logout = function () {

        $http.get('/api/user/logout').success(function (data, status, headers, config) {
            console.log(data);
            console.log("Success::" + status);
            $window.location.href = '/#/'
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $window.location.href = '/#/'
            console.log("Error::" + status);
        });


    };


}]);