const {Schema, model} = require('mongoose');

const Object3DSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must put the object name']
    },
    address: {
        type: String,
        required: [true, 'You must put the object address']
    },
    urlObject: {
        type: String,
        required: [true, 'You must put the object urlObject']
    },
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Object3D', Object3DSchema);