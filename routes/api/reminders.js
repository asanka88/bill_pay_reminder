var express = require('express');
var router = express.Router();
var payReminderService=require('../../modules/payReminderManager');

/* GET users listing. */
router.get('/all', function(req, res, next) {

    var session=req.session;
    console.log('session');
    console.log(session);
    var userPromise=userService.getAllUsers();
    userPromise.then(function(data){
        res.contentType('application/json').send(data);

    }).catch(function(err){
        if(err){
            res.send(500);
        }
    })
});



/* GET users listing. */
router.get('/', function(req, res, next) {
    var sess=req.session;
    var user=sess.user;
  
var reminderGetPromise=payReminderService.getPayementReminders(user.username);
console.log("===1=reminders get ==");
console.log(reminderGetPromise);
    reminderGetPromise.then(function(data){
        console.log('Reminder retrieved sucessfully -->'+data)
        res.send(data);
    }).catch(function(err){
        if(err){
            console.log(err);
            res.send(500);
        }
    })
});
/* Add a new user */
router.post('/', function(req, res, next) {
    var reminder=req.body;
    console.log('posted');
    var sess=req.session;
    var user=sess.user;
    console.log(user.name);
    console.log(reminder);

var reminderAddPromise=payReminderService.addPayementReminder(user.username,reminder);
     reminderAddPromise.then(function(data){
        console.log('Reminder added sucessfully -->'+data)
        res.sendStatus(200);
    }).catch(function(err){
        if(err){
            console.log(err);
            res.send(500);
        }
    })

});


/* Get a  user */
router.get('/:username', function(req, res, next) {
    var username=req.params.username;
    console.log('posted');
    console.log(username);

    var userSearchPromise=userService.search({username:username});

    userSearchPromise.then(function(data){
        console.log('User found sucessfully -->'+data)
        res.contentType('application/json').send(data);
    }).catch(function(err){
        if(err){
            res.send(500);
        }
    })

});

module.exports = router;
