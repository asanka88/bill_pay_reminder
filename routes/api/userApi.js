var express = require('express');
var router = express.Router();
var userService=require('../../modules/userManager');

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
router.get('/logout', function(req, res, next) {

    var sess=req.session;
    console.log('session');
    console.log(sess.user);
    if(sess.user){
        sess.user=null;
        res.sendStatus(200);
    }else{
        res.sendStatus(500);
    }
    // var userPromise=userService.getAllUsers();
    // userPromise.then(function(data){
    //     res.contentType('application/json').send(data);

    // }).catch(function(err){
    //     if(err){
    //         res.send(500);
    //     }
    // })
});
/* GET users listing. */
router.get('/', function(req, res, next) {

    var sess=req.session;
    console.log('session');
    console.log(sess.user);
    if(sess.user){
        res.contentType('application/json').send(sess.user);
    }else{
        res.sendStatus(500);
    }
    // var userPromise=userService.getAllUsers();
    // userPromise.then(function(data){
    //     res.contentType('application/json').send(data);

    // }).catch(function(err){
    //     if(err){
    //         res.send(500);
    //     }
    // })
});
/* Add a new user */
router.post('/', function(req, res, next) {
    var user=req.body;
    console.log('posted');
    console.log(user.name);

    var userAddPromise=userService.add(user.username,user.name,user.password);

    userAddPromise.then(function(data){
        console.log('User added sucessfully -->'+data)
        res.sendStatus(200);
    }).catch(function(err){
        if(err){
            res.send(500);
        }
    })

});

/* login a user */
router.post('/login', function(req, res, next) {
    var user=req.body;
    console.log('login');
   // console.log(user.name);

    var userAddPromise=userService.login(user.username,user.password);

    userAddPromise.then(function(data){
       console.log(data.length);
       if(data.length===0){
           res.sendStatus(401);
       }
      console.log('before');

       var sess=req.session;
       sess.user=data[0];
       res.sendStatus(200);
       
    }).catch(function(err){
        if(err){
            console.log(err);
            res.sendStatus(401);
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
