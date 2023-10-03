const {Schema, model} = require('mongoose');

const postForoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'You must put the title'],
    },
    content: {
        type: String,
        required: [true, 'You must put the content'],
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    },
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('PostForo', postForoSchema);