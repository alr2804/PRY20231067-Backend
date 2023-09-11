const authSchema = {
    authSignUp: {
        type: "object",
        required: ["firstname", "lastname", "email", ,"username", "password"],
        properties: {
            firstname: {
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
            },
            password: {
                type: "string"
            },
        }
    },
    authSignIn: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
            username: {
                type: "string",
            },
            password: {
                type: "string",
            },
        }
    }
}

module.exports = authSchema;