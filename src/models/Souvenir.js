const {Schema, model} = require('mongoose');

const SouvenirSchema = new Schema({
    _object3D: {
        type: Schema.Types.ObjectId,
        ref: 'Object3D',
        required: [true, 'You must put the object 3D']
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    }
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Souvenir', SouvenirSchema);