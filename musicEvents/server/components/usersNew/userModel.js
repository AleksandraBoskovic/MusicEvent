const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    administrator : {type : Boolean, require : true},
    name: {type : String, require : true},
    surname: {type : String, require : true},
    username: {type : String, require : true},
    password: {type : String, require : true},
    email : {type : String, require : true},
    phone : {type : String, require : true}
},
{
    versionKey: false
}
);

module.exports = mongoose.model('newusers', userSchema);