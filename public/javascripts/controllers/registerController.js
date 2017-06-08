  angular.module('myApp').controller('registerController', ['$scope', '$log', '$http', function ($scope, $log, $http) {

    $scope.name = 'Register';
    $scope.userName = ''
    $scope.fName = '';
    $scope.password = '';
    $scope.useraddresult = '';
    $scope.register = function () {
        var user = {};
        user.name = $scope.fName;
        user.username = $scope.userName;
        user.password = $scope.password;
        $http.post('/api/user', user).success(function (data, status, headers, config) {
            console.log("Success::" + status);
            $scope.useraddresult = true;
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.useraddresult = false;
            console.log("Error::" + status);
        });


    };

}]);