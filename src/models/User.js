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
    urlImageProfile: {
        type: String,
        // required: [true, 'You must put the url image'],
        required: false,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DjoQ3H0LFCWXLurl6qeHzGnbox2_cJTAmg&usqp=CAU'
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