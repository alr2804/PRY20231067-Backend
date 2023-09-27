const {Schema, model} = require('mongoose');

const ReviewSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    },
    _place: {
        type: Schema.Types.ObjectId,
        ref: 'Place',
        required: [true, 'You must put the place']
    },
    content: {
        type: String,
        required: [true, 'You must put the content'],
    },
    rating: {
        type: Number,
        required: [true, 'You must put the rating'],
    }
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Review', ReviewSchema);