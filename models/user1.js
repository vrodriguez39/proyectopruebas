const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({

email: {
       type:String,
       require: true,
       },
password:   {
        type:String
        },

date: {
        type: Date,
        default: Date.now
            }


});
module.exports = mongoose.model("Users",usersSchema);