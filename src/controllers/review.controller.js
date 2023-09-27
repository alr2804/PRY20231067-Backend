const { where } = require('../models/Place');
const Review = require('../models/Review');


const getReviews = async (req, res) => {
    try{
        const reviews = await Review.find();
        res.status(200).json({message: 'Get reviews', data: reviews});
    } catch(err) {
        console.log('err', err);
    } 
}

const getReviewByPlaceID = async (req, res) => {
    try{
        const {id} = req.params;
        const review = await Review.find({_place: id}).populate('_user')
        if(!review) {
            return res.status(404).send({message:"Review not found"});
        }
        return res.status(200).json({data:review});
    } catch(err) {
        return res.status(400).send({error: err})
    }
    
}


const createReview = async (req, res) => {
    try{
        const {content, rating, _user, _place} = req.body;
        const newReview = new Review({
            content,
            _place,
            _user,
            rating
        });
        const reviewRequestSaved = await newReview.save();
        res.status(201).json({data: reviewRequestSaved});
    } catch (err) {
        return res.status(400).send({err});
    }
    
}


const updateReview = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const reviewUpdated = await Review.findByIdAndUpdate(id, body);
    if(!reviewUpdated){
        return res.status(404).send({message: "Review not found"})
    }
    return res.status(200).json({message: 'Review updated', data: reviewUpdated});
}

const deleteReview = async (req, res) => {
    const {id} = req.params;
    const reviewDeleted = await Review.findByIdAndDelete(id);
    if(!reviewDeleted){
        return res.status(404).send({message: "Review not found"})
    }
    return res.status(200).json({message: 'Review deleted', data: reviewDeleted});
}

module.exports.ReviewController = {
    getReviews,
    getReviewByPlaceID,
    createReview,
    updateReview,
    deleteReview
}