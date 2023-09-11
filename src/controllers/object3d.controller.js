const Object3D = require('../models/Object3D');


const getObjects3D = async (req, res) => {
    try{
        const objects = await Object3D.find();
        res.status(200).json({message: 'Get Objects 3D', data: objects});
    } catch(err) {
        console.log('err', err);
    } 
}



const getObject3DByID = async (req, res) => {
    try{
        const {id} = req.params;
        const object3d = await Object3D.findById(id);
        if(!object3d) {
            return res.status(404).send({message:"Object 3D not found"});
        }
        return res.status(200).json({data:object3d});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const createObject3D = async (req, res) => {
    try{
        const {name, address, urlObject} = req.body;
        const newObject3D = new Object3D({
            name,
            address,
            urlObject
        });
        const object3DRequestSaved = await newObject3D.save();
        res.status(201).json({data: object3DRequestSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}


const updateObject3D = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const object3dUpdated = await Object3D.findByIdAndUpdate(id, body);
    if(!object3dUpdated){
        return res.status(404).send({message: "Object 3D not found"})
    }
    return res.status(200).json({message: 'Object 3D updated', data: object3dUpdated});
}

const deleteObject3D = async (req, res) => {
    const {id} = req.params;
    const object3dDeleted = await Object3D.findByIdAndDelete(id);
    if(!object3dDeleted){
        return res.status(404).send({message: "Object 3D not found"})
    }
    return res.status(200).json({message: 'Object 3D deleted', data: object3dDeleted});
}

module.exports.Object3DController = {
    getObjects3D,
    getObject3DByID,
    createObject3D,
    updateObject3D,
    deleteObject3D
}