var userModel = require('../models/user');
var Q = require('q');
/* Module returns promises */

var paymentReminderService = {};

paymentReminderService.getPayementReminders = function (_username) {
   var defer=Q.defer();
     userModel.find({ username: _username }).then(function (users) {
        var user=users[0];
         if (user.payReminders === null && user.payReminders == undefined) {
            user.payReminders = [];
        }
          defer.resolve(user.payReminders);
         
    }).catch(function (err) {
        console.error(err);
        defer.reject(err);
    });

    return defer.promise;
}

paymentReminderService.addPayementReminder = function (_username, paymentReminder) {   

    return userModel.find({ username: _username }).then(function (users) {
        var user=users[0];
         if (user.payReminders === null && user.payReminders == undefined) {
            user.payReminders = [];
        }
         user.payReminders.push(paymentReminder);
         return user.save() 
    }).catch(function (err) {
        console.error(err);
    });
}

paymentReminderService.removePayementReminder = function (username, paymentReminder) {

}

paymentReminderService.updatePayementReminder = function (username, paymentReminder) {

}

module.exports = paymentReminderService;