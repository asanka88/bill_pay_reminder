angular.module('myApp').config(function ($routeProvider) {

    $routeProvider

        .when('/register', {
            templateUrl: 'pages/register.html',
            controller: 'registerController'
        })
        .when('/profile', {
            templateUrl: 'pages/profile.html',
            controller: 'profileController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'loginController'
        })
        .when('/', {
            templateUrl: 'pages/landing.html',
            controller: 'landingController'
        })
        .when('/reminder/add', {
            templateUrl: 'pages/addreminder.html',
            controller: 'addReminderController'
        }).otherwise({
            redirectTo: '/'
        });
 

});