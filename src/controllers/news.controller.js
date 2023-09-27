const New = require('../models/New');


const getNews = async (req, res) => {
    try{
        const news = await New.find();
        res.status(200).json({message: 'Get new', data: news});
    } catch(err) {
        console.log('err', err);
    } 
}

const getNewByID = async (req, res) => {
    try{
        const {id} = req.params;
        const oneNew = await New.findById(id);
        if(!oneNew) {
            return res.status(404).send({message:"New not found"});
        }
        return res.status(200).json({data:oneNew});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}


 

const createNew = async (req, res) => {
    try{
        const {titular, content, image} = req.body;
        const newNew = new New({
            titular,
            content,
            image
        });
        const newRequestSaved = await newNew.save();
        res.status(201).json({data: newRequestSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}


const updateNew = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const newUpdated = await New.findByIdAndUpdate(id, body);
    if(!newUpdated){
        return res.status(404).send({message: "New not found"})
    }
    return res.status(200).json({message: 'New updated', data: newUpdated});
}

const deleteNew = async (req, res) => {
    const {id} = req.params;
    const newDeleted = await New.findByIdAndDelete(id);
    if(!newDeleted){
        return res.status(404).send({message: "New not found"})
    }
    return res.status(200).json({message: 'New deleted', data: newDeleted});
}

module.exports.NewController = {
    getNews,
    getNewByID,
    createNew,
    updateNew,
    deleteNew
}