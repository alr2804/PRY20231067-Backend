const newSchema = {
    new: {
        type: "object",
        required: ["titular", "content", "image"],
        properties: {
            titular: {
                type: "string"
            },
            content: {
                type: "string"
            },
            image: {
                type: "string"
            },
        }
    },      
}

module.exports = newSchema;