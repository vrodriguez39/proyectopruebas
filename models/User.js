const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
name:{
       type:String
       },
email: {
       type:String
       },
password:   {
        type:String
        },
rol:   {
              type:String
              },
sucursal:   {
                     type:String
                     },
date: {
        type: Date,
        default: Date.now
            }


});
module.exports = mongoose.model("Userinfo",userSchema);