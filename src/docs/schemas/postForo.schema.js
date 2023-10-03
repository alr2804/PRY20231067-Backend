const postForoSchema = {
    postForo: {
        type: "object",
        required: ["title", "content", "_user"],
        properties: {
            title: {
                type: "string"
            },
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
        required: ["title", "content"],
        properties: {
            title: {
                type: "string"
            },
            content: {
                type: "number"
            },
        }
    },    
}

module.exports = postForoSchema;