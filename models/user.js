// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/billbayuserdb');
mongoose.Promise=require('q').Promise;
var Schema = mongoose.Schema;

var reminderSchema=new Schema({
     payee: String,
      type: String,
      day:Number,
      nextReminder: Date,
      paid:[{
          year:Number,
          month: Number,
          status: Boolean
      }]
});

// create a schema
var userSchema = new Schema({
  name: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  created_at: Date,
  updated_at: Date,
  payReminders:[reminderSchema]
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;