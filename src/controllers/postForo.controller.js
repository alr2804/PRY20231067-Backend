const PostForo = require('../models/PostForo');


const getPostsForo = async (req, res) => {
    try{
        const posts = await PostForo.find().populate('_user');
        res.status(200).json({message: 'Get post foro', data: posts});
    } catch(err) {
        console.log('err', err);
    } 
}

const getPostForoByID = async (req, res) => {
    try{
        const {id} = req.params;
        const postForo = await PostForo.findById(id);
        if(!postForo) {
            return res.status(404).send({message:"PostForo not found"});
        }
        return res.status(200).json({data:postForo});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}

const getPostForoByuserID = async (req, res) => {
    try{
        const {id} = req.params;
        const postForo = await PostForo.find({_user: id}).populate('_user')
        if(!postForo) {
            return res.status(404).send({message:"Posts Foro not found"});
        }
        return res.status(200).json({data:postForo});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}


 

const createPostForo = async (req, res) => {
    try{
        const {content, _user} = req.body;
        console.log('req.body', req.body)
        const newPostForo = new PostForo({
            content,
            _user
        });
        const postForoRequestSaved = await newPostForo.save();
        res.status(201).json({data: postForoRequestSaved});
    } catch (err) {
        return res.status(400).send({err:err});
    }
    
}


const updatePostForo = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const postForoUpdated = await PostForo.findByIdAndUpdate(id, body);
    if(!postForoUpdated){
        return res.status(404).send({message: "PostForo not found"})
    }
    return res.status(200).json({message: 'PostForo updated', data: postForoUpdated});
}

const deletePostForo = async (req, res) => {
    const {id} = req.params;
    const postForoDeleted = await PostForo.findByIdAndDelete(id);
    if(!postForoDeleted){
        return res.status(404).send({message: "PostForo not found"})
    }
    return res.status(200).json({message: 'PostForo deleted', data: postForoDeleted});
}

module.exports.PostForoController = {
    getPostsForo,
    getPostForoByID,
    getPostForoByuserID,
    createPostForo,
    updatePostForo,
    deletePostForo
}