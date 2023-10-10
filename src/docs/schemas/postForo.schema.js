const postForoSchema = {
    postForo: {
        type: "object",
        required: ["content", "_user"],
        properties: {
            content: {
                type: "string"
            },
            _user: {
                type: "string"
            },
        }
    },
    postForoUpdate: {
        type: "object",
        required: ["content"],
        properties: {
            content: {
                type: "number"
            },
        }
    },    
}

module.exports = postForoSchema;