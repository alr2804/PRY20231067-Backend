const souvenirSchema = {
    souvenir: {
        type: "object",
        required: ["_object3D", "_user"],
        properties: {
            _object3D: {
                type: "string"
            },
            _user: {
                type: "string"
            },
        }
    },        
}

module.exports = souvenirSchema;