const userObjectSchema = {
    user_object: {
        type: "object",
        required: ["_object3d", "_user"],
        properties: {
            _object3d: {
                type: "string"
            },
            _user: {
                type: "string"
            },
        }
    },        
}

module.exports = userObjectSchema;