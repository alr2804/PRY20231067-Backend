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
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
            default: []
        }
    ],
    longitude: {
        type: Number,
        required: [true, 'You must put the longitude']
    },
    latitude: {
        type: Number,
        required: [true, 'You must put the latitude']
    }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Place', PlaceSchema);