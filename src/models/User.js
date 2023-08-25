const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'You must put the firstname']
    },
    lastname: {
        type: String,
        required: [true, 'You must put the lastname']
    },
    username: {
        type: String,
        required: [true, 'You must put the username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'You must put the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'You must put the password'],
        select: false
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', UserSchema);