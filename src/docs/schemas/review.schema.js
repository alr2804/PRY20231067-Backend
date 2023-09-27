const reviewSchema = {
    review: {
        type: "object",
        required: ["content", "rating", "_user", "_place"],
        properties: {
            content: {
                type: "string"
            },
            rating: {
                type: "number"
            },
            _user: {
                type: "string"
            },
            _place: {
                type: "string"
            }
        }
    },
    reviewUpdate: {
        type: "object",
        required: ["content", "rating"],
        properties: {
            content: {
                type: "string"
            },
            rating: {
                type: "number"
            }
        }
    },        
}

module.exports = reviewSchema;