const mongoose = require('mongoose');

var rolesSchema = mongoose.Schema({
name:{
       type:String
       },
status:{
        type:String
        },
date: {
        type: Date,
        default: Date.now
            }


});
module.exports = mongoose.model("roles",rolesSchema);