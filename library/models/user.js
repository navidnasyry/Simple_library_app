mongoose = require("mongoose");
Schema = mongoose.Schema;


const userSchema = new Schema ({
    username:{
        type:String,
        unique: true,
    },
    first_name:{
        type: String,
        default: null,
    },
    last_name:{
        type:String,
        default: null
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    token:{
        type:String,

    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;

