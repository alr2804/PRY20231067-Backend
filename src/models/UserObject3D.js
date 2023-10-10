const {Schema, model} = require('mongoose');

const UserObject3DSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    },
    _object3d: {
        type: Schema.Types.ObjectId,
        ref: 'Object3D',
        required: [true, 'You must put the object 3d']
    },
    hasVisited: {
        type: Boolean,
        required: false,
        default: false
    }

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('UserObject3D', UserObject3DSchema);