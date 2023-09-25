const placeSchema = {
    place: {
        type: "object",
        required: ["name", "description", "photo"],
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            photo: {
                type: "string"
            }
        }
    },        
}

module.exports = placeSchema;