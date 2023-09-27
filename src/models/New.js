const {Schema, model} = require('mongoose');

const NewSchema = new Schema({
    titular: {
        type: String,
        required: [true, 'You must put the titular'],
    },
    content: {
        type: String,
        required: [true, 'You must put the content'],
    },
    image: {
        type: String,
        required: [true, 'You must put the image'],
    }
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('New', NewSchema);