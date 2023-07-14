

//! module.exports.users = [
// module.exports = [
//     {first: "Kyle", last: "Marymee"},
//     {first: "Aleksey", last: "Kashubin"},
//     {first: "Ben", last: "Gomez"},
//     {first: "Austin", last: "Serb"},
//     {first: "Kurt", last: "Clausen"}
// ];


const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        first: {
            type: String,
            required : [true, "Please include a first name!"],
            minlength : [2, "First name must be at least 2 characters!"] 
        },
        last: {
            type: String,
            required : [true, "Please include a last name!"],
            minlength : [2, "Last name must be at least 2 characters!"] 
        }
    }
)

const User = mongoose.model('User', UserSchema)

module.exports = User