const object3dSchema = {
    object3d: {
        type: "object",
        required: ["name", "address", "urlObject"],
        properties: {
            name: {
                type: "string"
            },
            address: {
                type: "string"
            },
            urlObject: {
                type: "string"
            },
        }
    },        
}

module.exports = object3dSchema;