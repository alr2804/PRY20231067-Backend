const Souvenir = require('../models/Souvenir');


const getSouvenirs = async (req, res) => {
    try{
        const souvenirs = await Souvenir.find();
        res.status(200).json({message: 'Get souvenirs', data: souvenirs});
    } catch(err) {
        console.log('err', err);
    } 
}



const getSouvenirByID = async (req, res) => {
    try{
        const {id} = req.params;
        const souvenir = await Souvenir.findById(id);
        if(!souvenir) {
            return res.status(404).send({message:"Souvenir not found"});
        }
        return res.status(200).json({data:souvenir});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const createSouvenir = async (req, res) => {
    try{
        const {_object3D, _user} = req.body;
        const newSouvenir = new Souvenir({
            _object3D,
            _user
        });
        const souvenirRequestSaved = await newSouvenir.save();
        res.status(201).json({data: souvenirRequestSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}


const updateSouvenir = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const souvenirUpdated = await User.findByIdAndUpdate(id, body);
    if(!souvenirUpdated){
        return res.status(404).send({message: "Souvenir not found"})
    }
    return res.status(200).json({message: 'Souvenir updated', data: souvenirUpdated});
}

const deleteSouvenir = async (req, res) => {
    const {id} = req.params;
    const souvenirDeleted = await Souvenir.findByIdAndDelete(id);
    if(!souvenirDeleted){
        return res.status(404).send({message: "Souvenir not found"})
    }
    return res.status(200).json({message: 'Souvenir deleted', data: souvenirDeleted});
}

module.exports.SouvenirController = {
    getSouvenirs,
    getSouvenirByID,
    createSouvenir,
    updateSouvenir,
    deleteSouvenir
}