const newSchema = {
    new: {
        type: "object",
        required: ["titular", "content", "image"],
        properties: {
            titular: {
                type: "string"
            },
            content: {
                type: "number"
            },
            image: {
                type: "string"
            },
        }
    },      
}

module.exports = newSchema;