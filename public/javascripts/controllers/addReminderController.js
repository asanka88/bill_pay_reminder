angular.module('myApp').controller('addReminderController', ['$scope', '$log', '$http', '$window', function ($scope, $log, $http, $window) {

    $scope.payee = 'testPayee';
    $scope.type = 'Credit'
    $scope.day = 20;
    $scope.reminderAddResult='';
 

    $scope.add = function () {
        var reminder = {};
        reminder.payee = $scope.payee;
        reminder.type = $scope.type;
        reminder.day=$scope.day;
        $http.post('/api/reminder', reminder).success(function (data, status, headers, config) {
            console.log("Success::" + status);
            $scope.reminderAddResult=true;
         }).error(function (data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
                        $scope.reminderAddResult=false;

             console.log("Error::" + status);
        });

    }

}]);