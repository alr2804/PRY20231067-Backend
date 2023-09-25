const {Schema, model} = require('mongoose');

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must put the name']
    },
    description: {
        type: String,
        required: [true, 'You must put the description']
    },
    photo: {
        type: String,
        required: [true, 'You must put the photo'],
    },

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Place', PlaceSchema);