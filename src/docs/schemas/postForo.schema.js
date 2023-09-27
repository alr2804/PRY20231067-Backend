const postForoSchema = {
    postForo: {
        type: "object",
        required: ["titular", "content", "_user"],
        properties: {
            titular: {
                type: "string"
            },
            content: {
                type: "number"
            },
            _user: {
                type: "string"
            },
        }
    },
    postForoUpdate: {
        type: "object",
        required: ["titular", "content"],
        properties: {
            titular: {
                type: "string"
            },
            content: {
                type: "number"
            },
        }
    },    
}

module.exports = postForoSchema;