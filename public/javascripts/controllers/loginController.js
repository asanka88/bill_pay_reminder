
  angular.module('myApp').controller('loginController', ['$scope', '$log', '$http', '$window', function ($scope, $log, $http, $window) {

    $scope.name = 'Login';
    $scope.userName = ''
    $scope.password = '';
    $scope.userloginresult = '';


    $scope.login = function () {
        var user = {};
        user.username = $scope.userName;
        user.password = $scope.password;
        $http.post('/api/user/login', user).success(function (data, status, headers, config) {
            console.log("Success::" + status);
            $window.location.href = '/#/profile'
            $scope.userloginresult = true;
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.userloginresult = false;
            console.log("Error::" + status);
        });

    }

}]);