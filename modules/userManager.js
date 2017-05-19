var userModel=require('../models/user');
/* Module returns promises */

var userService={};

userService.add=function(userName,_name,_password){
    //add user to the db

    var user=new userModel({
        name:_name,
        username:userName,
        password:_password
    });
    return user.save();
}

userService.getAllUsers=function(){

    return userModel.find({});

}

userService.search=function(searchFactors){

    return userModel.find(searchFactors);

}

userService.remove=function(userId){
    //remove user with the userId
    userModel.findOneAndRemove({name:userId},function(err,user){
        if(err){
            throw err;
        }
        console.log("User Removed from the application -->"+user);       

    } );
}

userService.login=function(_userName,_password){
    return userModel.find({username:_userName,password:_password});
}

module.exports=userService;


