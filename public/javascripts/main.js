var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/register', {
            templateUrl: 'pages/register.html',
            controller: 'mainController'
        })
        .when('/myprofile', {
            templateUrl: 'pages/profile.html',
            controller: 'secondController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .when('/', {
            templateUrl: 'pages/landing.html',
            controller: 'landingController'
        })

});

myApp.controller('mainController', ['$scope', '$log', '$http', function ($scope, $log, $http) {

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

myApp.controller('secondController', ['$scope', '$log','$http', '$window',function ($scope, $log,$http,$window) {

    $scope.name = 'Profile';
    $scope.fName = 'test';


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


}]);

myApp.controller('logoutController', ['$scope', '$log','$http', '$window',function ($scope, $log,$http,$window) {

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


myApp.controller('loginController', ['$scope', '$log', '$http', '$window', function ($scope, $log, $http, $window) {

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
            $window.location.href = '/#/myprofile'
            $scope.userloginresult = true;
        }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.userloginresult = false;
            console.log("Error::" + status);
        });

    }

}]);


myApp.controller('landingController', ['$scope', '$log', '$http', '$window', function ($scope, $log, $http, $window) {

    $scope.name = 'Landing';
     

}]);