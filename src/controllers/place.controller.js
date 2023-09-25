const Place = require('../models/Place');


const getPlaces = async (req, res) => {
    try{
        const places = await Place.find();
        res.status(200).json({message: 'Get places', data: places});
    } catch(err) {
        console.log('err', err);
    } 
}


 

const createPlace = async (req, res) => {
    try{
        const {name, description, photo} = req.body;
        const newPlace = new Place({
            name,
            description,
            photo
        });
        const placeRequestSaved = await newPlace.save();
        res.status(201).json({data: placeRequestSaved});
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

module.exports.PlaceController = {
    getPlaces,
    createPlace,
    updatePlace,
    deletePlace
}