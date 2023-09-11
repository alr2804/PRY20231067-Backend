const userSchema = {
    user: {
        type: "object",
        required: ["firstname", "lastname", "email", "username", "password"],
        properties: {
            fullname: {
                type: "string"
            },
            email: {
                type: "string"
            },
            username: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }
    },
    userUpdate: {
        type: "object",
        required: ["firstname", "lastname", "email", "username"],
        properties: {
            fisrtname: {
                type: "string"
            },
            lastname: {
                type: "string"
            },
            email: {
                type: "string"
            },
            username: {
                type: "string"
            }
        }
    }
        
}

module.exports = userSchema;