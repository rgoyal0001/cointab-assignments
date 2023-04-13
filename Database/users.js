const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        select: false
    }

}, {
    timestamps: true
},{
    block:String
}
)

const User = mongoose.model('User', userSchema);

module.exports = { User };


