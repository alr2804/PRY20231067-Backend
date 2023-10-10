const UserObject3D = require('../models/UserObject3D');


const getUsersObject3D = async (req, res) => {
    try{
        const {_user, _object3d} = req.params;
        const user_object = await UserObject3D.findOne({
            _user: _user,
            _object3d: _object3d 
        })
        if(!user_object) {
            return res.status(404).send({message:"User with Object3D not found"});
        }
        return res.status(200).json({data:user_object});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

 

const createUserObject = async (req, res) => {
    try{
        const {_user, _object3d} = req.body;
        const newUserObject = new UserObject3D({
            _user,
            _object3d
        });
        const userobjectRequestSaved = await newUserObject.save();
        res.status(201).json({data: userobjectRequestSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}


const updatePlace = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const placeUpdated = await Place.findByIdAndUpdate(id, body);
    if(!placeUpdated){
        return res.status(404).send({message: "Place not found"})
    }
    return res.status(200).json({message: 'Place updated', data: placeUpdated});
}

const deletePlace = async (req, res) => {
    const {id} = req.params;
    const placeDeleted = await Place.findByIdAndDelete(id);
    if(!placeDeleted){
        return res.status(404).send({message: "Place not found"})
    }
    return res.status(200).json({message: 'Place deleted', data: placeDeleted});
}

module.exports.UserObject3DController = {
    getUsersObject3D,
    createUserObject
}